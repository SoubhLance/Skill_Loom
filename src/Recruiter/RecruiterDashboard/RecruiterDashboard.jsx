import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Company/Recruiter Profile State
  const [companyProfile, setCompanyProfile] = useState({
    companyName: '',
    companyType: '',
    industry: '',
    companySize: '',
    location: '',
    website: '',
    description: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    logo: null
  });

  // Job Posting State
  const [jobPosting, setJobPosting] = useState({
    title: '',
    department: '',
    location: '',
    jobType: '',
    experience: '',
    salary: '',
    skills: '',
    description: '',
    requirements: '',
    benefits: '',
    applicationDeadline: ''
  });

  // Mock data for posted jobs and applications
  const [postedJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer Intern',
      department: 'Technology',
      location: 'Bangalore',
      applicants: 25,
      status: 'Active',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'Mumbai',
      applicants: 18,
      status: 'Active',
      postedDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      department: 'Analytics',
      location: 'Hyderabad',
      applicants: 32,
      status: 'Closed',
      postedDate: '2024-01-10'
    }
  ]);

  const [applications] = useState([
    {
      id: 1,
      studentName: 'Rahul Sharma',
      jobTitle: 'Software Engineer Intern',
      appliedDate: '2024-01-16',
      status: 'Under Review',
      skills: 'React, Node.js, Python',
      experience: 'Fresher',
      college: 'IIT Delhi'
    },
    {
      id: 2,
      studentName: 'Priya Patel',
      jobTitle: 'Marketing Intern',
      appliedDate: '2024-01-15',
      status: 'Shortlisted',
      skills: 'Digital Marketing, SEO, Content Writing',
      experience: '6 months',
      college: 'NMIMS Mumbai'
    },
    {
      id: 3,
      studentName: 'Arjun Kumar',
      jobTitle: 'Data Analyst Intern',
      appliedDate: '2024-01-14',
      status: 'Selected',
      skills: 'Python, SQL, Tableau, Statistics',
      experience: '1 year',
      college: 'IIIT Hyderabad'
    },
    {
      id: 4,
      studentName: 'Sneha Singh',
      jobTitle: 'Software Engineer Intern',
      appliedDate: '2024-01-13',
      status: 'Rejected',
      skills: 'Java, Spring Boot, MySQL',
      experience: 'Fresher',
      college: 'NIT Warangal'
    }
  ]);

  // Check authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert('Company profile updated successfully!');
  };

  // Handle job posting form submission
  const handleJobSubmit = (e) => {
    e.preventDefault();
    alert('Job posted successfully!');
    setJobPosting({
      title: '',
      department: '',
      location: '',
      jobType: '',
      experience: '',
      salary: '',
      skills: '',
      description: '',
      requirements: '',
      benefits: '',
      applicationDeadline: ''
    });
  };

  // Handle application status update
  const handleStatusUpdate = (applicationId, newStatus) => {
    alert(`Application status updated to: ${newStatus}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Top Section */}
        <div className="bg-blue-600 text-white p-4 rounded-t-xl shadow flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold">SkillLoom Recruiter Portal</h1>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Ministry of Education | Recruitment Platform</p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-building text-white text-sm"></i>
              </div>
              <span className="text-sm">{user?.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8 border-l-8 border-orange-500 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
            <i className="fa-solid fa-building text-orange-500 text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome to Recruiter Dashboard!
            </h2>
            <p className="text-gray-700 mt-2">
              Manage your company profile, post internships, and connect with talented students.
            </p>
            <p className="text-gray-700">
              Email: <span className="font-semibold">{user?.email}</span>
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Profile */}
          <div
            className="relative bg-white border-[8px] border-orange-500 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveTab('profile')}
          >
            <i className="fa-solid fa-building absolute text-orange-500 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Company Profile
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Manage your company information and branding.
            </p>
          </div>

          {/* Post Internships */}
          <div
            className="relative bg-white border-[8px] border-orange-300 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveTab('post-job')}
          >
            <i className="fa-solid fa-plus-circle absolute text-orange-400 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Post Internship
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Create and publish new internship opportunities.
            </p>
          </div>

          {/* Posted Jobs */}
          <div
            className="relative bg-white border-[8px] border-green-300 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveTab('jobs')}
          >
            <i className="fa-solid fa-briefcase absolute text-green-500 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Posted Jobs
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              View and manage your active job postings.
            </p>
          </div>

          {/* Applications */}
          <div
            className="relative bg-white border-[8px] border-green-600 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveTab('applications')}
          >
            <i className="fa-solid fa-users absolute text-green-600 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Applications
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Review and manage candidate applications.
            </p>
          </div>

          {/* Profile */}
          <div
            className="relative bg-white border-[8px] border-blue-400 rounded-xl shadow p-6 text-center overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveTab('profile-view')}
          >
            <i className="fa-solid fa-user-tie absolute text-blue-400 text-8xl opacity-20 -right-6 -bottom-4"></i>
            <h2 className="text-xl font-bold text-gray-800 relative z-10">
              Profile
            </h2>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              View your recruiter profile and analytics.
            </p>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab !== 'main' && (
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {activeTab === 'profile' && 'Company Profile'}
                  {activeTab === 'post-job' && 'Post New Internship'}
                  {activeTab === 'jobs' && 'Posted Internships'}
                  {activeTab === 'applications' && 'Applications Received'}
                  {activeTab === 'profile-view' && 'Recruiter Profile & Analytics'}
                </h3>
                
              </div>

              {/* Company Profile Tab */}
              {activeTab === 'profile' && (
                <form onSubmit={handleProfileSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={companyProfile.companyName}
                        onChange={(e) => setCompanyProfile({...companyProfile, companyName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter company name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Type
                      </label>
                      <select
                        value={companyProfile.companyType}
                        onChange={(e) => setCompanyProfile({...companyProfile, companyType: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select company type</option>
                        <option value="startup">Startup</option>
                        <option value="sme">Small & Medium Enterprise</option>
                        <option value="mnc">Multinational Corporation</option>
                        <option value="government">Government</option>
                        <option value="ngo">Non-Profit Organization</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        value={companyProfile.industry}
                        onChange={(e) => setCompanyProfile({...companyProfile, industry: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="automobile">Automobile</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="tourism">Tourism</option>
                        <option value="space">Space</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size
                      </label>
                      <select
                        value={companyProfile.companySize}
                        onChange={(e) => setCompanyProfile({...companyProfile, companySize: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={companyProfile.location}
                        onChange={(e) => setCompanyProfile({...companyProfile, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="City, State"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={companyProfile.website}
                        onChange={(e) => setCompanyProfile({...companyProfile, website: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="https://www.company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        value={companyProfile.contactPerson}
                        onChange={(e) => setCompanyProfile({...companyProfile, contactPerson: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="HR Manager / Recruiter Name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={companyProfile.contactEmail}
                        onChange={(e) => setCompanyProfile({...companyProfile, contactEmail: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="hr@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Description
                    </label>
                    <textarea
                      value={companyProfile.description}
                      onChange={(e) => setCompanyProfile({...companyProfile, description: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe your company, vision, and work culture..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Save Profile
                    </button>
                  </div>
                </form>
              )}

              {/* Post Job Tab */}
              {activeTab === 'post-job' && (
                <form onSubmit={handleJobSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={jobPosting.title}
                        onChange={(e) => setJobPosting({...jobPosting, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g. Software Engineer Intern"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <select
                        value={jobPosting.department}
                        onChange={(e) => setJobPosting({...jobPosting, department: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select department</option>
                        <option value="technology">Technology</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="hr">Human Resources</option>
                        <option value="operations">Operations</option>
                        <option value="sales">Sales</option>
                        <option value="design">Design</option>
                        <option value="analytics">Analytics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={jobPosting.location}
                        onChange={(e) => setJobPosting({...jobPosting, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="City, State or Remote"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Salary/Stipend (₹)
                      </label>
                      <input
                        type="text"
                        value={jobPosting.salary}
                        onChange={(e) => setJobPosting({...jobPosting, salary: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g. 15,000 - 25,000 per month"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Skills
                    </label>
                    <input
                      type="text"
                      value={jobPosting.skills}
                      onChange={(e) => setJobPosting({...jobPosting, skills: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="e.g. React, Node.js, Python, JavaScript (comma separated)"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Description
                    </label>
                    <textarea
                      value={jobPosting.description}
                      onChange={(e) => setJobPosting({...jobPosting, description: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe the role, responsibilities, and what the intern will learn..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Post Internship
                    </button>
                  </div>
                </form>
              )}

              {/* Posted Jobs Tab */}
              {activeTab === 'jobs' && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Job Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applications
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {postedJobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{job.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {job.department}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                            {job.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {job.applicants} applicants
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              job.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {job.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 px-2 py-1 rounded">
                              View
                            </button>
                            <button className="text-orange-600 hover:text-orange-900 px-2 py-1 rounded">
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-900 px-2 py-1 rounded">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div className="space-y-6">
                  {applications.map((application) => (
                    <div key={application.id} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">{application.studentName}</h3>
                          <p className="text-gray-600">{application.jobTitle}</p>
                          <p className="text-sm text-gray-500">Applied on: {application.appliedDate}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          application.status === 'Selected' ? 'bg-green-100 text-green-800' :
                          application.status === 'Shortlisted' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {application.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700">Skills</p>
                          <p className="text-sm text-gray-600">{application.skills}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Experience</p>
                          <p className="text-sm text-gray-600">{application.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">College</p>
                          <p className="text-sm text-gray-600">{application.college}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 flex-wrap gap-2">
                        <button 
                          onClick={() => handleStatusUpdate(application.id, 'Shortlisted')}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                          Shortlist
                        </button>
                        <button 
                          onClick={() => handleStatusUpdate(application.id, 'Selected')}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                        >
                          Select
                        </button>
                        <button 
                          onClick={() => handleStatusUpdate(application.id, 'Rejected')}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                          Reject
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          View Resume
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile View Tab */}
              {activeTab === 'profile-view' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Company Info */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Company Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Email</span>
                        <span className="font-medium">{user?.email}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Account Type</span>
                        <span className="font-medium">Recruiter</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Registration Date</span>
                        <span className="font-medium">Jan 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Status</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Statistics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Jobs Posted</span>
                        <span className="font-semibold text-blue-600">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Applications</span>
                        <span className="font-semibold text-green-600">75</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Hired Candidates</span>
                        <span className="font-semibold text-purple-600">18</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Success Rate</span>
                        <span className="font-semibold text-orange-600">76%</span>
                      </div>
                    </div>
                  </div>

                  {/* Top Skills */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Most Sought Skills</h3>
                    <div className="space-y-3">
                      {[
                        { skill: 'React.js', count: 28 },
                        { skill: 'Python', count: 25 },
                        { skill: 'JavaScript', count: 30 },
                        { skill: 'Node.js', count: 22 },
                        { skill: 'SQL', count: 18 },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.skill}</span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm">
                            {item.count} applicants
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Account Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-white transition-colors">
                        <i className="fa-solid fa-download text-blue-500 mr-3"></i>
                        <span>Export Application Data</span>
                      </button>
                      
                      <button className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-white transition-colors">
                        <i className="fa-solid fa-envelope text-green-500 mr-3"></i>
                        <span>Send Bulk Notifications</span>
                      </button>
                      
                      <button className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-white transition-colors">
                        <i className="fa-solid fa-chart-line text-purple-500 mr-3"></i>
                        <span>Generate Reports</span>
                      </button>
                      
                      <button className="w-full p-3 text-left border border-gray-300 rounded-lg hover:bg-white transition-colors">
                        <i className="fa-solid fa-cog text-gray-500 mr-3"></i>
                        <span>Account Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </GovernmentLayout>
  );
};

export default RecruiterDashboard;