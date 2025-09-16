// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; 
import InternshipGuidelines from "./Components/InternshipGuidelines/InternshipGuidelines.jsx";
import Education from "./Components/Education/Education.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import ResumeUpload from "./Profile/ResumeUpload/ResumeUpload.jsx"; 
import ProfileForm from "./Profile/ProfileForm/ProfileForm.jsx";
import Dashboard from "./Profile/Dashboard/Dashboard.jsx";
import ProfilePage from "./Profile/ProfilePage/ProfilePage.jsx";
import Internships from "./Profile/Internships/Internships.jsx";
import ResumeAnalysis from "./Profile/ResumeAnalysis/ResumeAnalysis.jsx";
import Doculoom from "./Profile/Doculoom/Doculoom.jsx";
import SkillAssessment from "./Profile/SkillAssessment/SkillAssessment.jsx";
import MyInternships from "./Profile/MyInternships/MyInternships.jsx";
import RecruiterDashboard from "./Recruiter/RecruiterDashboard/RecruiterDashboard.jsx";
import { auth } from "./firebase";





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
      <Route path="/profile-form" element={<ProfileForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resume-analytics" element={<h1>Resume Analytics Page</h1>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/resume-analysis" element={<ResumeAnalysis  />} />
      <Route path="/doculoom" element={<Doculoom />} />
      <Route path="/skill-assessment" element={<SkillAssessment />} />
      <Route path="/my-internships" element={<MyInternships />} />
      <Route path="/recruiter-details" element={<RecruiterDashboard />} />

      
    </Routes>
  </BrowserRouter>
);
