import React from "react";
import govLogo from "../Images/NavbarImages/GovLogo.png";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import pmModiPhoto from "../Images/NavbarImages/PM.png";

const GovernmentNavbar = () => {
  return (
    <div className="w-full font-sans">
      {/* Top utility bar */}
      <div className="bg-gray-800 text-white text-xs px-4 py-1 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>Skip to main content</span>
          <span>Screen Reader Access</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer">A-</span>
          <span className="cursor-pointer">A</span>
          <span className="cursor-pointer">A+</span>
          <span className="cursor-pointer">हिंदी</span>
        </div>
      </div>

      {/* Main header with reduced height */}
      <div className="bg-white px-6 py-1 border-b border-gray-200">
        <div className="flex items-center justify-between w-full">
          {/* Left: Govt logo + text */}
          <div className="flex items-center gap-4">
            <img src={govLogo} alt="Gov Logo" className="h-36 w-36 object-contain" style={{minHeight: '144px', minWidth: '144px'}} />
            <div className="text-gray-900">
              {/* Text content removed as in your code */}
            </div>
          </div>

          {/* Center: SkillLoom logo - absolutely centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={skillLoomLogo} alt="SkillLoom Logo" className="h-16 w-auto object-contain" />
          </div>

          {/* Right: PM Modi photo */}
          <div className="flex flex-col items-center">
            <img src={pmModiPhoto} alt="PM Modi" className="h-16 w-16 object-cover" />
            <span className="text-gray-500 text-xs mt-1">Hon'ble PM</span>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-6">
          {["Home", "Internship Guidelines", "Education", "About Us", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-normal hover:text-blue-200 transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Breadcrumb / scrolling text */}
      <div className="bg-blue-500 text-white px-6 py-2 text-sm overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          <span>
            Government Programs • Higher Education Reforms • Research and Innovation Excellence • Quality Assurance in Education
          </span>
          <span>
            National Education Policy 2020 Implementation • Digital Education Revolution • Skill Development Programs • Higher Education
          </span>
        </div>
      </div>
    </div>
  );
};

export default GovernmentNavbar;