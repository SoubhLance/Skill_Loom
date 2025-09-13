import React, { useState } from "react";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import tricolorBg from "../Images/Homepage/Tricolor.png";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
  );
}