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

      {/* Main header */}
      <div className="bg-white px-6 py-2 border-b border-gray-200">
        <div className="flex items-center w-full">
          {/* Left: Gov logo + text */}
          <div className="flex items-center gap-4 flex-1">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
              <img src={govLogo} alt="Gov Logo" className="h-12 w-12 object-contain rounded-full" />
            </div>
            <div className="text-gray-900">
              <div className="font-bold text-base">भारत सरकार</div>
              <div className="font-semibold text-sm">Government of India</div>
              <div className="text-blue-700 text-xs">शिक्षा मंत्रालय | Ministry of Education</div>
            </div>
          </div>

          {/* Center: SkillLoom logo - perfectly centered */}
          <div className="flex items-center justify-center flex-1">
            <img src={skillLoomLogo} alt="SkillLoom Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Right: PM Modi photo */}
          <div className="flex items-center justify-end flex-1">
            <div className="flex flex-col items-center">
              <img src={pmModiPhoto} alt="PM Modi" className="h-16 w-16 object-cover" />
              <span className="text-[#1E3AA7] text-xs mt-1 font-bold">Hon'ble PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[#2674D9] text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center gap-6">
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
      <div className="bg-[#E3E3E3] text-[#2674D9] px-6 py-2 text-sm overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee font-bold" style={{animation: 'scroll 30s linear infinite'}}>
          <span>
            Government Programs  •  Higher Education Reforms  •  Research and Innovation Excellence  •  Quality Assurance in Education
          </span>
          <span>
            National Education Policy 2020 Implementation  •  Digital Education Revolution  •  Skill Development Programs  •  Higher Education
          </span>
        </div>
        <style jsx>{`
        //   @keyframes scroll {
        //     0% {
        //       transform: translateX(100%);
        //     }
        //     100% {
        //       transform: translateX(-100%);
        //     }
        //   }
        `}</style>
      </div>
    </div>
  );
};

export default GovernmentNavbar;