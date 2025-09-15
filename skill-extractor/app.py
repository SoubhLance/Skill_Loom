#!/usr/bin/env python3
from flask import Flask, request, render_template, Response
from flask_cors import CORS
import os, tempfile

from extract import extract_skills_from_text, read_text

app = Flask(__name__)
CORS(app)

ALLOWED_EXT = {".pdf", ".docx", ".txt"}

@app.get("/")
def index():
    return render_template("index.html")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/extract")
def extract_endpoint():
    # optional query params
    cutoff = int(request.args.get("cutoff", 92))
    max_ngrams = int(request.args.get("max_ngrams", 4))

    if "file" not in request.files:
        return {"detail": "No file field named 'file' in form-data"}, 400

    f = request.files["file"]
    if not f or not f.filename:
        return {"detail": "No file provided"}, 400

    suffix = os.path.splitext(f.filename)[1].lower()
    if suffix not in ALLOWED_EXT:
        return {"detail": f"Unsupported file type: {suffix}. Use .pdf, .docx or .txt"}, 400

    tmp_path = None
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
            f.save(tmp)
            tmp_path = tmp.name

        # extract to dict
        raw_text = read_text(tmp_path)
        result = extract_skills_from_text(raw_text, fuzzy_cutoff=cutoff, max_ngrams=max_ngrams)

        # format as plain text (no braces/commas)
        lines = []
        for category, skills in result.items():
            lines.append(category)
            for skill in skills:
                # strip obvious junky fragments (optional light cleanup)
                s = skill.strip().strip(".")
                if not s or len(s) > 60:
                    continue
                lines.append(f"- {s}")
            lines.append("")  # blank line

        txt = "\n".join(lines).strip()
        if not txt:
            txt = "No skills found (check if the PDF is scanned / image-only)."

        return Response(txt, mimetype="text/plain; charset=utf-8")
    except Exception as e:
        return {"detail": f"Extraction failed: {e}"}, 500
    finally:
        try:
            if tmp_path and os.path.exists(tmp_path):
                os.remove(tmp_path)
        except Exception:
            pass

if __name__ == "__main__":
    # Run: python app.py  → open http://127.0.0.1:5000
    app.run(host="127.0.0.1", port=5000, debug=True)
