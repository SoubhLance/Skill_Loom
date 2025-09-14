import React, { useEffect, useState } from "react";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";
import Sidebar from "../../Components/Layout/Sidebar";

export default function Dashboard() {
  const [name, setName] = useState("");

  // Load the name from localStorage (set in ProfileForm)
  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    if (storedName) setName(storedName);
  }, []);

  return (
    <GovernmentLayout>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar Section */}
        <Sidebar active="dashboard" />

        {/* Main Content Section */}
        <div className="flex-1">
          {/* Top Section */}
          <div className="bg-white shadow-md border-b">
            <div className="max-w-7xl mx-auto p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Hello {name || "User"} 👋
              </h1>
              <p className="text-sm text-gray-500">
                Welcome to your SkillLoom Dashboard | AI-powered Career Guidance
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Resume Score</h3>
              <p className="text-3xl font-bold text-orange-500">57</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Internships</h3>
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-xs text-gray-500">Available</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Matches</h3>
              <p className="text-3xl font-bold text-blue-500">—</p>
              <p className="text-xs text-gray-500">Profile Based</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Profile</h3>
              <p className="text-3xl font-bold text-purple-500">100%</p>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
          </div>

          {/* Resume Review */}
          <div className="max-w-7xl mx-auto p-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="font-semibold text-gray-800 mb-2">
                Your resume scored 57 out of 100.
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                This is a decent start, but there’s room for improvement. Your resume scored low on some key criteria hiring managers and resume screening software look for, but these can be fixed.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "57%" }}></div>
              </div>
              <p className="text-xs text-gray-500">
                Your score is benchmarked against 1M+ resumes at your career level.
              </p>
            </div>
          </div>

          {/* Recommended Section */}
          <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Certification Courses</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get govt-accredited certification in 4–8 weeks with 600k+ users.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Explore Now
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-gray-800 mb-2">Internships</h3>
              <p className="text-sm text-gray-600 mb-4">
                Software Testing Internship – Work From Home, 6 Months, ₹1,60,000/month
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Details
              </button>
            </div>
          </div>

          {/* Profile Overview */}
          <div className="max-w-7xl mx-auto p-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-gray-800 mb-4">Profile Overview</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="font-semibold">Personal</p>
                  <p className="text-gray-600">Soubhik Saha, Male</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="font-semibold">Education</p>
                  <p className="text-gray-600">B.Tech 3rd Year</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="font-semibold">Skills</p>
                  <p className="text-gray-600">Python</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="font-semibold">Interest</p>
                  <p className="text-gray-600">Cloud Computing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
}
