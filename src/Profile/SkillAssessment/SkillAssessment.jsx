import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

export default function SkillAssessment() {
  const navigate = useNavigate();

  // Skills data
  const skills = [
    { name: "React", questions: 10, time: "10 minutes" },
    { name: "JavaScript", questions: 10, time: "10 minutes" },
    { name: "Python", questions: 10, time: "10 minutes" },
    { name: "Java", questions: 10, time: "10 minutes" },
    { name: "Node.js", questions: 10, time: "10 minutes" },
    { name: "SQL", questions: 10, time: "10 minutes" },
  ];

  // Recent activities state
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem("recentActivities");
    return stored ? JSON.parse(stored) : [];
  });

  // Add activity when user clicks a skill
  const handleSkillClick = (skill) => {
    const newActivity = {
      name: `${skill} Assessment`,
      date: new Date().toLocaleString(),
    };

    const updated = [newActivity, ...activities].slice(0, 5); // keep last 5
    setActivities(updated);
    localStorage.setItem("recentActivities", JSON.stringify(updated));

    navigate(`/quiz/${skill.toLowerCase()}`);
  };

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="px-6 pt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>
        </div>

        {/* Hero Section with better colors */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-12 shadow-md mt-4">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Skill Assessment
            </h1>
            <p className="mt-3 text-lg text-blue-100 max-w-2xl mx-auto">
              Test your knowledge and earn skill certifications to showcase your expertise
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Skill Cards */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Choose a Skill to Assess
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 p-4 rounded-xl text-center cursor-pointer 
                             transition transform hover:scale-105 hover:shadow-lg
                             hover:border-blue-400 hover:bg-blue-50"
                  onClick={() => handleSkillClick(skill.name)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {skill.questions} questions • {skill.time}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Industry-standard assessment
                  </p>
                </div>
              ))}
            </div>

            {/* Guidelines */}
            <div className="bg-blue-50 p-4 rounded-lg mt-6 text-sm text-gray-700">
              <h4 className="font-semibold mb-2">Assessment Guidelines</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Each quiz contains 10 multiple-choice questions</li>
                <li>You have 10 minutes to complete the assessment</li>
                <li>You can retake the quiz after 7 days</li>
                <li>Passing score is 60% or higher</li>
                <li>Certificates are issued for scores above 80%</li>
              </ul>
            </div>
          </div>

          {/* Recent Activities Box */}
          <div className="max-w-4xl mx-auto mt-6 bg-white border border-blue-300 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
            {activities.length === 0 ? (
              <p className="text-gray-600 text-sm">No recent activities yet.</p>
            ) : (
              <ul className="space-y-2">
                {activities.map((activity, i) => (
                  <li
                    key={i}
                    className="p-3 border rounded-lg bg-blue-50 border-blue-200 flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-800">{activity.name}</span>
                    <span className="text-xs text-gray-500">{activity.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
}
