// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; 
import InternshipGuidelines from "./Components/InternshipGuidelines/InternshipGuidelines.jsx";
import Education from "./Components/Education/Education.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import ResumeUpload from "./Dashboard/ResumeUpload/ResumeUpload.jsx"; // ✅ fixed path
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume-upload" element={<ResumeUpload />} /> {/* ✅ new route */}
      <Route path="/internship-guidelines" element={<InternshipGuidelines />} />
      <Route path="/education" element={<Education />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
