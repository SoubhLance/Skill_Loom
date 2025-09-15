import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";
import { Search, Filter, Download, Eye, ArrowLeft } from "lucide-react";

const ResumeAnalysis = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const resumes = [
    { id: 1, name: "John Doe Resume", date: "2024-08-10", status: "Excellent", score: 92, tags: ["JavaScript", "React", "Node.js"] },
    { id: 2, name: "Jane Smith Resume", date: "2024-08-05", status: "Good", score: 78, tags: ["Python", "Django", "ML"] },
    { id: 3, name: "Alice Johnson Resume", date: "2024-07-28", status: "Average", score: 65, tags: ["Java", "Spring Boot", "SQL"] },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent": return "bg-green-100 text-green-700 border-green-200";
      case "Good": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Average": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Poor": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-10 shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">Resume Analysis</h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              AI-powered insights to help you improve and optimize your resume for better opportunities
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Search + Filter Section */}
          <div className="bg-white rounded-xl shadow p-5 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-l-8 border-purple-500">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resumes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg shadow-md transition">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Resumes", value: resumes.length, color: "blue" },
              { label: "Excellent", value: resumes.filter((r) => r.status === "Excellent").length, color: "green" },
              { label: "Good", value: resumes.filter((r) => r.status === "Good").length, color: "yellow" },
              { label: "Average", value: resumes.filter((r) => r.status === "Average").length, color: "orange" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-white border-l-8 border-${stat.color}-500 rounded-xl shadow p-6 hover:shadow-lg transition`}
              >
                <p className="font-medium text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">Updated dynamically</p>
              </div>
            ))}
          </div>

          {/* Resume Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-purple-500">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  {["Name", "Date", "Score", "Status", "Tags", "Actions"].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {resumes.map((resume) => (
                  <tr
                    key={resume.id}
                    className="hover:bg-purple-50 transition cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">{resume.name}</td>
                    <td className="px-6 py-4 text-gray-500">{resume.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{resume.score}%</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          resume.status
                        )}`}
                      >
                        {resume.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex flex-wrap gap-1">
                      {resume.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
};

export default ResumeAnalysis;
