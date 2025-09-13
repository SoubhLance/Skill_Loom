import React, { useState } from "react";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import tricolorBg from "../Images/Homepage/Tricolor.png";
import educationMinister from "../Images/Homepage/EducationMinister.jpg";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Minister's Message and Login */}
        <div className="flex gap-8 mb-8">
          {/* Minister's Message Container */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex-1 max-w-4xl">
            {/* Header */}
            <div className="bg-blue-800 text-white text-center py-4 -mx-8 -mt-8 mb-8 rounded-t-2xl">
              <h3 className="text-lg font-semibold">Honourable Minister's Message</h3>
            </div>

            {/* Minister's Content */}
            <div className="text-center">
              {/* Minister Photo */}
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-orange-200 shadow-lg">
                <img 
                  src={educationMinister} 
                  alt="Shri Dharmendra Pradhan" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Minister Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Shri Dharmendra Pradhan</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-8">Minister of Education, Government of India</h4>
             
              {/* Message */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-inner">
                <p className="text-base text-gray-700 leading-relaxed text-left italic">
                  "Education is the foundation of our nation's progress. Through the National Education Policy 2020 and digital initiatives like DIKSHA and SWAYAM, we are creating an inclusive learning ecosystem. SkillLoom embodies our vision of skill-based education and industry collaboration, preparing students for tomorrow's challenges."
                </p>
                <div className="text-right mt-4">
                  <p className="text-sm font-semibold text-gray-600">- Shri Dharmendra Pradhan</p>
                  <p className="text-xs text-gray-500">Minister of Education & Skill Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Container */}
          <div className="shadow-xl rounded-2xl w-full max-w-sm relative overflow-hidden">
            {/* Background Image */}
            <img 
              src={tricolorBg} 
              alt="Tricolor Background" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            
            {/* Content Container */}
            <div className="relative z-10 p-6">
              {/* Logo */}
              <div className="text-center mb-4">
                <img 
                  src={skillLoomLogo} 
                  alt="SkillLoom Logo" 
                  className="mx-auto h-28 w-auto"
                />
              </div>

              {/* Tabs */}
              <div className="flex justify-center mb-4 space-x-6 text-gray-700 font-medium text-sm">
                <button 
                  className={`pb-1 transition-all ${
                    activeTab === "login" 
                      ? "border-b-2 border-orange-600 text-orange-700" 
                      : "hover:border-b-2 hover:border-orange-400 hover:text-orange-600"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button 
                  className={`pb-1 transition-all ${
                    activeTab === "signup" 
                      ? "border-b-2 border-orange-600 text-orange-700" 
                      : "hover:border-b-2 hover:border-orange-400 hover:text-orange-600"
                  }`}
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>

              {/* Welcome */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">
                  {activeTab === "login" ? "Welcome Back!" : "Join SkillLoom!"}
                </h2>
                <p className="text-xs text-gray-600">
                  {activeTab === "login" 
                    ? "Please enter your details to login." 
                    : "Create your account to get started."
                  }
                </p>
              </div>

              {/* Form */}
              <form className="space-y-3">
                {activeTab === "signup" && (
                  <div>
                    <label className="block text-xs font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium mb-1">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-medium">Password</label>
                    {activeTab === "login" && (
                      <a href="#" className="text-xs text-orange-600 hover:underline">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <input
                    type="password"
                    placeholder={activeTab === "login" ? "Enter your password" : "Create a password"}
                    className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                  />
                </div>

                {activeTab === "signup" && (
                  <div>
                    <label className="block text-xs font-medium mb-1">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 text-white font-medium text-sm hover:from-orange-700 hover:to-orange-800 transition-all"
                >
                  {activeTab === "login" ? "Log In" : "Sign Up"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-400 text-xs">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Social Buttons */}
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-orange-50 hover:border-orange-200 transition-all">
                  <i className="fa-brands fa-google text-orange-600"></i> Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-orange-50 hover:border-orange-200 transition-all">
                  <i className="fa-solid fa-phone text-orange-600"></i> Continue with Phone
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Cards Section - Now properly positioned below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* National Education Policy 2020 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">National Education Policy 2020</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm">Holistic and Multidisciplinary Education</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm">Critical Thinking and Creativity</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm">Technology Integration</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-sm">Skill-based Learning</span>
              </div>
            </div>
          </div>

          {/* Digital India in Education */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Digital India in Education</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm">DIKSHA Platform</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm">PM eVIDYA Programme</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm">SWAYAM Online Courses</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm">Digital Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* AICTE Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-600 text-white px-6 py-4">
            <div className="flex items-center">
              <div className="text-2xl mr-3">🏛️</div>
              <h3 className="text-lg font-semibold">AICTE - Technical Education</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-blue-700 font-semibold mb-4">AICTE Initiatives</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-2">🎓</span>
                    <span className="text-sm">Technical Institution Approval</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-2">⭐</span>
                    <span className="text-sm">Quality Enhancement Programs</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-2">🌟</span>
                    <span className="text-sm">Industry-Academia Partnership</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-2">🔬</span>
                    <span className="text-sm">Research & Innovation</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-blue-700 font-semibold mb-4">Student Services</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">📋</span>
                    <span className="text-sm">Online Grievance System</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">👥</span>
                    <span className="text-sm">Student Feedback Portal</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">🏛️</span>
                    <span className="text-sm">Institution Verification</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">📊</span>
                    <span className="text-sm">Approval Process Status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}