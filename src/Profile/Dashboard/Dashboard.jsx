// src/Components/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

export default function Dashboard() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [abcId, setAbcId] = useState("");
  const [skillloomId, setSkillloomId] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("fullName") || "User";
    const storedAbc =
      localStorage.getItem("abcId") ||
      "ABC" + Math.floor(Math.random() * 1000000);
    const storedPhoto = localStorage.getItem("profilePhoto");

    let storedSkillloom = localStorage.getItem("skillloomId");
    if (!storedSkillloom) {
      storedSkillloom = "SL" + Date.now(); // Generate unique ID
      localStorage.setItem("skillloomId", storedSkillloom);
    }

    setUsername(storedName);
    setAbcId(storedAbc);
    setSkillloomId(storedSkillloom);
    if (storedPhoto) setProfilePhoto(storedPhoto);
  }, []);

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Top Section */}
        <div className="bg-blue-600 text-white p-4 rounded-t-xl shadow flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold">SkillLoom Dashboard</h1>
          <p className="text-sm">
            Ministry of Education | AI-powered Career Guidance
          </p>
        </div>

        {/* Greeting Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8 border-l-8 border-orange-500 flex items-center gap-6">
          {/* Profile Photo */}
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-orange-400 shadow-md object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm border">
              No Photo
            </div>
          )}

          {/* Greeting Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Hello, {username}! 👋
            </h2>
            <p className="text-gray-700 mt-2">
              ABC ID: <span className="font-semibold">{abcId}</span>
            </p>
            <p className="text-gray-700">
              SkillLoom ID:{" "}
              <span className="font-semibold">{skillloomId}</span>
            </p>
          </div>
        </div>

        {/* 🔹 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DocuLoom */}
          <div
            className="relative bg-white border-[8px] border-orange-500 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/doculoom")}
          >
            <i className="fa-solid fa-folder-open absolute text-orange-500 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              DocuLoom
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Upload, store, and verify documents securely.
            </p>
          </div>

          {/* Internships */}
          <div
            className="relative bg-white border-[8px] border-orange-300 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/internships")}
          >
            <i className="fa-solid fa-briefcase absolute text-orange-400 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Internships
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Explore AI-matched internships for your career.
            </p>
          </div>

          {/* My Internships */}
          <div
            className="relative bg-white border-[8px] border-green-300 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/my-internships")}
          >
            <i className="fa-solid fa-person-walking-luggage absolute text-green-500 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              My Internships
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Track your applications and progress in one place.
            </p>
          </div>

          {/* Profile */}
          <div
            className="relative bg-white border-[8px] border-green-600 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/profile")}
          >
            <i className="fa-solid fa-user-tie absolute text-green-600 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Profile
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Manage your identity and skill portfolio.
            </p>
          </div>

          {/* Skill Assessment */}
          <div
            className="relative bg-white border-[8px] border-blue-400 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/skill-assessment")}
          >
            <i className="fa-solid fa-lightbulb absolute text-blue-400 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Skill Assessment
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Test and evaluate your skills with AI-driven quizzes.
            </p>
          </div>

          {/* Resume Analysis */}
          <div
            className="relative bg-white border-[8px] border-purple-500 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/resume-analysis")}
          >
            <i className="fa-solid fa-file-alt absolute text-purple-500 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Resume Analysis
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Get instant feedback and improve your resume with AI insights.
            </p>
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
}
