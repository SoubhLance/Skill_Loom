import React from "react";
import govLogo from "../Images/NavbarImages/GovLogo.png";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import pmModiPhoto from "../Images/NavbarImages/PM.png";
import swachhBharatLogo from "../Images/NavbarImages/swachbharat.jpg";
import { Link } from "react-router-dom";


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

          {/* Right: PM Modi photo and Swachh Bharat logo */}
          <div className="flex items-center justify-end flex-1 gap-6">
            {/* PM Modi */}
            <div className="flex flex-col items-center">
              <img src={pmModiPhoto} alt="PM Modi" className="h-16 w-16 object-cover" />
              <span className="text-[#1E3AA7] text-xs mt-1 font-bold">Hon'ble PM</span>
            </div>
            
            {/* Swachh Bharat */}
            <div className="flex flex-col items-center">
              <img src={swachhBharatLogo} alt="Swachh Bharat" className="h-16 w-22 " />
              
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
     <nav className="bg-[#2674D9] text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center gap-6">
          <Link to="/" className="text-sm font-normal hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link to="/internship-guidelines" className="text-sm font-normal hover:text-blue-200 transition-colors">
            Internship Guidelines
          </Link>
          <Link to="/education" className="text-sm font-normal hover:text-blue-200 transition-colors">
            Education
          </Link>
          <Link to="/about-us" className="text-sm font-normal hover:text-blue-200 transition-colors">
            About Us
          </Link>
          <Link to="/contact-us" className="text-sm font-normal hover:text-blue-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </nav>


    {/* Breadcrumb / scrolling text */}
      <div className="bg-[#E3E3E3] text-[#2674D9] px-6 py-2 text-sm overflow-hidden">
      <div className="marquee font-bold">
        <div className="track">
          <span>
            Government Programs • Higher Education Reforms • Research and Innovation Excellence • Quality Assurance in Education • National Education Policy 2020 Implementation • Digital Education Revolution • Skill Development Programs • Higher Education •
          </span>
          <span>
            Government Programs • Higher Education Reforms • Research and Innovation Excellence • Quality Assurance in Education • National Education Policy 2020 Implementation • Digital Education Revolution • Skill Development Programs • Higher Education •
          </span>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .track {
          display: inline-block;
          animation: scroll 50s linear infinite; /* speed control */
        }
        .track span {
          display: inline-block;
          padding-right: 4rem; /* gap maintain karne ke liye */
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>

    </div>
  );
};

export default GovernmentNavbar;