#!/usr/bin/env python3
"""
extract.py — Lightweight, sector-agnostic skill extractor (no CSV / no ML).
Now with strict filters to remove GPA/CGPA/percent-like tokens.

Install deps:
  python -m pip install rapidfuzz pdfplumber docx2txt
"""

import os, re
from typing import List, Dict, Tuple
from rapidfuzz import process, fuzz

try:
    import pdfplumber
except ImportError:
    pdfplumber = None

try:
    import docx2txt
except ImportError:
    docx2txt = None


# ------------------------- File reading -------------------------
def read_text(path: str) -> str:
    ext = os.path.splitext(path)[1].lower()
    if ext == ".pdf":
        if not pdfplumber:
            raise RuntimeError("pdfplumber not installed. Run: python -m pip install pdfplumber")
        parts = []
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                parts.append(page.extract_text() or "")
        return "\n".join(parts)
    elif ext == ".docx":
        if not docx2txt:
            raise RuntimeError("docx2txt not installed. Run: python -m pip install docx2txt")
        return docx2txt.process(path) or ""
    elif ext == ".txt":
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()
    else:
        raise ValueError(f"Unsupported file type: {ext} (use .pdf, .docx or .txt)")


# ------------------------- Normalization -------------------------
def normalize_space(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()

SAFE_CHARS = r"a-zA-Z0-9\.\+#&/\-\(\)\+"

def soft_clean(s: str) -> str:
    s = s.replace("\u00a0", " ")
    s = re.sub(fr"[^{SAFE_CHARS}\s]", " ", s)
    return normalize_space(s)


# ------------------------- Junk filters -------------------------
# GPA/grades patterns (words)
GPA_PATTERNS = [
    r"\bCGPA\b", r"\bGPA\b", r"\bSGPA\b", r"\bCPI\b",
    r"\bgrade\b", r"\bgrades\b", r"\bscore\b", r"\bmarks?\b"
]
# Numbers like 9.1/10, 8/10; percentages like 85%
GPA_NUMBER_PATTERNS = [
    r"\b\d+(\.\d+)?\s*/\s*10\b",
    r"\b\d+(\.\d+)?\s*%\b"
]
GPA_REGEX = re.compile("|".join(GPA_PATTERNS), re.IGNORECASE)
GPA_NUM_REGEX = re.compile("|".join(GPA_NUMBER_PATTERNS))

# Ban prefixes that usually indicate sentence fragments, not skills
BAN_PREFIXES = {
    "and", "including", "implemented", "calculates", "identifies",
    "using", "with", "developed", "built", "created"
}

# Optional: ban obvious non-skill platforms/phrases (uncomment to use)
# BAN_SUBSTRINGS = {"codechef", "leetcode"}

def is_gpa_like(s: str) -> bool:
    if GPA_REGEX.search(s):
        return True
    if GPA_NUM_REGEX.search(s):
        return True
    return False

def strip_noise(s: str) -> str:
    # kill leading bullets
    s = BULLET_PATTERN.sub("", s).strip()
    # strip leading conjunction "and "
    s = re.sub(r"^(and)\s+", "", s, flags=re.IGNORECASE).strip()
    # strip trailing punctuation
    s = s.rstrip(" .;,:-").strip()
    return s


# ------------------------- Harvesting -------------------------
SKILLY_HEADINGS = [
    "skills", "technical skills", "core skills", "professional skills",
    "competencies", "core competencies", "key skills", "key strengths",
    "tools", "tooling", "technologies", "technology",
    "languages", "language skills",
    "certifications", "licenses", "licences", "accreditations",
    "methodologies", "frameworks",
    "areas of expertise", "expertise", "specialties", "specialities",
]
SKILL_CLAIMS = [
    r"proficient in", r"experience with", r"experienced in", r"skilled in",
    r"knowledge of", r"familiar with", r"hands[-\s]?on with", r"worked with",
    r"tools include", r"technologies include", r"competencies include",
    r"stack:", r"tooling:", r"tech(?:nologies)?:", r"skills?:"
]
BULLET_PATTERN = re.compile(r"^[\u2022\u2023\u25E6\u2043\u2219\-–•]+", re.UNICODE)

def split_sections(text: str) -> List[Tuple[str, str]]:
    lines = [l.rstrip() for l in text.splitlines()]
    pairs, i = [], 0
    while i < len(lines):
        line = soft_clean(lines[i]).lower()
        if line and any(h == line or h in line for h in SKILLY_HEADINGS):
            heading = lines[i]
            block, j, blanks = [], i + 1, 0
            while j < len(lines):
                L = lines[j]
                if not L.strip():
                    blanks += 1
                    if blanks >= 2:
                        break
                else:
                    blanks = 0
                    Lc = L.strip()
                    if (len(Lc) <= 60 and
                        (Lc.isupper() or re.match(r"^[A-Z][A-Z\s/&\-]{3,}$", Lc)) and
                        any(w in Lc.lower() for w in [
                            "experience","education","projects","summary","profile",
                            "employment","work","responsibilities","achievements","roles"
                        ])):
                        break
                    block.append(L)
                j += 1
            pairs.append((heading, "\n".join(block)))
            i = j
        else:
            i += 1
    return pairs

def claim_spans(text: str) -> List[str]:
    patt = re.compile(r"(?:" + "|".join(SKILL_CLAIMS) + r")\s*(.+)", re.IGNORECASE)
    return [m.group(1).strip() for m in patt.finditer(text)]


# ------------------------- Candidates -------------------------
SPLIT_ON = re.compile(r"[,\|;/·•]|\s{2,}")
COMMON_STOP = {
    "and","or","the","a","an","of","to","in","on","with","for","at","by","from",
    "etc","etc.","skills","tools","technologies","languages","competencies",
    "include","including"
}

def explode_block(block: str) -> List[str]:
    out = []
    # primary split (commas/pipes/semicolons/bullets/long spaces)
    for piece in SPLIT_ON.split(block):
        piece = piece.strip()
        if not piece:
            continue

        # split parenthetical content too
        par = re.findall(r"\(([^)]+)\)", piece)
        core = re.sub(r"\([^)]*\)", "", piece).strip()

        chunks = []
        if core:
            chunks.append(core)
        chunks.extend(par)

        # further split on sentence endings to avoid clauses
        refined = []
        for ch in chunks:
            refined.extend(re.split(r"[.;]\s+", ch))

        for r in refined:
            r = soft_clean(r)
            r = strip_noise(r)
            if r:
                out.append(r)
    return out

def plausible_token(tok: str, max_words: int = 4) -> bool:
    t = normalize_space(tok)
    if not t:
        return False

    # strip bullets/noise
    t = strip_noise(t)
    if not t:
        return False

    # hard block GPA/CGPA/percent formats
    if is_gpa_like(t):
        return False

    # optional ban substrings (platforms, etc.)
    # if any(b in t.lower() for b in BAN_SUBSTRINGS):
    #     return False

    # length and all-number checks
    if len(t) < 2 or len(t) > 50:
        return False
    if re.fullmatch(r"\d+(\.\d+)?", t):
        return False

    # ban certain prefixes (fragments)
    first = t.split()[0].lower()
    if first in BAN_PREFIXES:
        return False

    # allow acronyms (PMP, CFA, HACCP, ISO, S3, etc.)
    if re.fullmatch(r"[A-Z0-9]{2,6}", t):
        return True

    # constrain phrase length
    words = t.split()
    if len(words) > max_words:
        return False

    # avoid phrases that are only stopwords
    if all(w.lower() in COMMON_STOP for w in words):
        return False

    return True

def harvest_candidates(text: str, max_ngrams: int = 4) -> List[Tuple[str, str]]:
    cands = []
    for heading, block in split_sections(text):
        for ch in explode_block(block):
            if plausible_token(ch, max_words=max_ngrams):
                cands.append((ch, heading))
    for span in claim_spans(text):
        for ch in explode_block(span):
            if plausible_token(ch, max_words=max_ngrams):
                cands.append((ch, "inline"))
    return cands


# ------------------------- Dedup & Group -------------------------
def dedupe(items: List[str], cutoff: int = 92) -> List[str]:
    unique: List[str] = []
    for it in items:
        if not unique:
            unique.append(it); continue
        m = process.extractOne(it, unique, scorer=fuzz.WRatio, score_cutoff=cutoff)
        if not m:
            unique.append(it)
    return unique

CATEGORY_HINTS = {
    "Languages": ["language", "languages"],
    "Certifications": ["certification", "certifications", "license", "licence", "licenses", "licences"],
    "Tools/Tech": ["tool", "tools", "technology", "technologies", "tech", "stack", "frameworks", "methodologies"],
    "Core Competencies": ["competency", "competencies", "skills", "key skills", "strengths", "expertise"]
}

def infer_category(hint: str) -> str:
    h = hint.lower()
    for cat, kws in CATEGORY_HINTS.items():
        if any(k in h for k in kws):
            return cat
    return "General"

def group_by_category(tagged: List[Tuple[str, str]], cutoff: int = 92) -> Dict[str, List[str]]:
    buckets: Dict[str, List[str]] = {}
    for cand, hint in tagged:
        buckets.setdefault(infer_category(hint), []).append(cand)
    for k in list(buckets.keys()):
        buckets[k] = sorted(dedupe(buckets[k], cutoff=cutoff), key=lambda s: s.lower())
        if not buckets[k]:
            buckets.pop(k, None)
    return buckets


# ------------------------- Public API -------------------------
def extract_skills_from_text(raw_text: str, fuzzy_cutoff: int = 92, max_ngrams: int = 4) -> Dict[str, List[str]]:
    tagged = harvest_candidates(raw_text, max_ngrams)
    if not tagged:
        return {}
    all_cands = [c for c,_ in tagged]
    canonical = set(dedupe(all_cands, cutoff=fuzzy_cutoff))
    kept, seen = [], set()
    for c,h in tagged:
        if c in canonical and c not in seen:
            kept.append((c,h)); seen.add(c)
    return group_by_category(kept, cutoff=fuzzy_cutoff)
