import React from "react";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import tricolorBg from "../Images/Homepage/Tricolor.png";

export default function Homepage() {
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
              className="mx-auto h-20 w-auto"
            />
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-4 space-x-6 text-gray-600 font-medium text-sm">
            <button className="border-b-2 border-black pb-1">Login</button>
            <button className="pb-1 hover:border-b-2 hover:border-gray-400">
              Sign Up
            </button>
          </div>

          {/* Welcome */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Welcome!</h2>
            <p className="text-xs text-gray-600">
              Please enter your details to login.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-medium">Password</label>
                <a href="#" className="text-xs text-indigo-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-black text-white font-medium text-sm hover:bg-gray-800"
            >
              Log In
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
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-gray-50">
              <i className="fa-brands fa-google"></i> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-gray-50">
              <i className="fa-solid fa-phone"></i> Continue with Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}