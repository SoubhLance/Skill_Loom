import React, { useState } from 'react';
import { Search, Calendar, MapPin, Building2, Users, Clock, Filter, Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

const InternshipPortal = () => {
  const navigate = useNavigate(); // for Back button
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const internships = [
    {
      id: 1,
      title: "Software Development Internship",
      organization: "National Informatics Centre (NIC)",
      location: "New Delhi",
      duration: "6 months",
      stipend: "₹15,000/month",
      deadline: "2025-10-15",
      category: "Information Technology",
      description: "Develop and maintain government web applications and digital services.",
      eligibility: "B.Tech/B.E. in Computer Science, IT, or related field",
      skills: ["Java", "React", "Database Management", "Web Development"]
    },
    {
      id: 2,
      title: "Research Intern - Renewable Energy",
      organization: "Central Electricity Authority (CEA)",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹12,000/month",
      deadline: "2025-09-30",
      category: "Engineering",
      description: "Research on renewable energy integration and grid modernization.",
      eligibility: "B.Tech in Electrical/Electronics Engineering",
      skills: ["Power Systems", "MATLAB", "Research Methodology", "Data Analysis"]
    },
    {
      id: 3,
      title: "Digital Marketing Analyst",
      organization: "Prasar Bharati",
      location: "Bangalore",
      duration: "3 months",
      stipend: "₹10,000/month",
      deadline: "2025-09-25",
      category: "Media & Communications",
      description: "Analyze digital media campaigns and audience engagement metrics.",
      eligibility: "MBA/PGDM in Marketing or Mass Communication",
      skills: ["Digital Marketing", "Analytics", "Social Media", "Content Strategy"]
    },
    {
      id: 4,
      title: "Financial Analysis Intern",
      organization: "Reserve Bank of India",
      location: "Chennai",
      duration: "6 months",
      stipend: "₹18,000/month",
      deadline: "2025-10-20",
      category: "Finance",
      description: "Support financial research and policy analysis initiatives.",
      eligibility: "Master's in Economics, Finance, or related field",
      skills: ["Financial Analysis", "Economic Research", "Statistics", "Report Writing"]
    },
    {
      id: 5,
      title: "Cybersecurity Analyst Trainee",
      organization: "Computer Emergency Response Team (CERT-In)",
      location: "Hyderabad",
      duration: "5 months",
      stipend: "₹16,000/month",
      deadline: "2025-10-10",
      category: "Information Technology",
      description: "Learn cybersecurity practices and incident response procedures.",
      eligibility: "B.Tech/M.Tech in Computer Science or Cybersecurity",
      skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Tools"]
    },
    {
      id: 6,
      title: "Environmental Policy Research",
      organization: "Central Pollution Control Board",
      location: "Kolkata",
      duration: "4 months",
      stipend: "₹11,000/month",
      deadline: "2025-09-28",
      category: "Environment",
      description: "Research environmental policies and compliance monitoring.",
      eligibility: "M.Sc. in Environmental Science or related field",
      skills: ["Environmental Law", "Policy Analysis", "Field Research", "GIS"]
    }
  ];

  const categories = [
    'all', 'Information Technology', 'Engineering', 'Finance', 
    'Media & Communications', 'Environment'
  ];

  const locations = [
    'all', 'New Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata'
  ];

  // Rotating border colors for cards
  const borderColors = [
    "border-orange-400",
    "border-green-400",
    "border-blue-400",
    "border-purple-400",
    "border-pink-400",
    "border-yellow-400",
  ];

  // Filter internships
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          internship.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || internship.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isDeadlineNear = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-50">

        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-8 mt-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow">
              Internship Opportunities
            </h1>
            <p className="text-lg mb-6 text-orange-100 max-w-2xl mx-auto">
              Connecting students with government organizations for meaningful internship experiences
            </p>
            
            {/* Search and Filters */}
            <div className="bg-white rounded-xl p-4 shadow-lg text-gray-900 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search internships..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  {locations.slice(1).map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg">
                  <Filter className="h-4 w-4 mr-1" /> Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Internships</h2>
              <p className="text-gray-600 text-lg">
                {filteredInternships.length} internship{filteredInternships.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <button className="mt-4 sm:mt-0 flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download className="h-5 w-5" /> <span>Export List</span>
            </button>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {filteredInternships.map((internship, index) => (
              <div 
                key={internship.id} 
                className={`bg-white rounded-xl shadow-md border-4 ${borderColors[index % borderColors.length]} overflow-hidden hover:shadow-lg transition transform hover:scale-[1.02] hover:-translate-y-1`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                        {internship.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-3">
                        <Building2 className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">{internship.organization}</span>
                      </div>
                      <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="font-semibold text-green-600">{internship.stipend}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200 shrink-0">
                      {internship.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map(skill => (
                        <span key={skill} className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors duration-150">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 font-medium">
                        Deadline: {formatDate(internship.deadline)}
                      </span>
                      {isDeadlineNear(internship.deadline) && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200 animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1 hover:underline transition-colors">
                        <span>View Details</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredInternships.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No internships found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters to find more opportunities.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </GovernmentLayout>
  );
};

export default InternshipPortal;
