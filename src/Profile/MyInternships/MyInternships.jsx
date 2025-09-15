import React, { useState, useMemo } from "react";
import { Search, Calendar, MapPin, Building2, Grid3X3, List, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

const MyInternships = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("all");

  // Sample internship data
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechSoft Solutions",
      location: "Bengaluru, India",
      startDate: "2025-10-01",
      endDate: "2026-01-31",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "DataCorp",
      location: "Pune, India",
      startDate: "2025-09-15",
      endDate: "2025-12-15",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Backend Developer Intern",
      company: "CodeCrafters",
      location: "Remote",
      startDate: "2025-06-01",
      endDate: "2025-09-01",
      status: "Completed",
    },
  ];

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      const matchesSearch =
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === "all" || internship.status.toLowerCase() === filter.toLowerCase();
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-100 text-green-800 border-green-200";
      case "Upcoming":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const InternshipGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredInternships.map((internship) => (
        <div
          key={internship.id}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900">{internship.title}</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
            <Building2 className="w-4 h-4" /> {internship.company}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4" /> {internship.location}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
            <Calendar className="w-4 h-4" /> {internship.startDate} → {internship.endDate}
          </p>
          <span
            className={`inline-block mt-3 text-xs font-medium px-2 py-1 border rounded-full ${getStatusColor(
              internship.status
            )}`}
          >
            {internship.status}
          </span>
        </div>
      ))}
    </div>
  );

  const InternshipListView = () => (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Duration</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInternships.map((internship) => (
            <tr key={internship.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{internship.title}</td>
              <td className="px-4 py-2">{internship.company}</td>
              <td className="px-4 py-2">{internship.location}</td>
              <td className="px-4 py-2">
                {internship.startDate} → {internship.endDate}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(
                    internship.status
                  )}`}
                >
                  {internship.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-green-500 via-blue-400 to-indigo-500 text-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <div className="text-center mx-auto">
              <h1 className="text-2xl font-bold">My Internships</h1>
              <p className="text-sm">Track and Manage Your Internships</p>
            </div>
          </div>
        </header>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2 flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute ml-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:ring-1 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-1 focus:ring-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
            </select>

            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-white shadow text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-white shadow text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Internships Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-12">
          {viewMode === "grid" ? <InternshipGridView /> : <InternshipListView />}
        </main>
      </div>
    </GovernmentLayout>
  );
};

export default MyInternships;
