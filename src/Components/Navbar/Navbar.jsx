import React from 'react';

import govLogo from "../Images/NavbarImages/GovLogo.png";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import pmModiPhoto from "../Images/NavbarImages/PM.png";



const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top header section with logos */}
      <div className="bg-white py-3 px-6">
        <div className="flex items-center justify-between w-full">
          {/* Government of India Logo - Left */}
          <div className="flex items-center">
            <img 
              src={govLogo} 
              alt="Government of India - Ministry of Education" 
              className="h-14 w-auto object-contain"
            />
          </div>
          
          {/* Skill Loom Logo - Center */}
          <div className="flex items-center">
            <img 
              src={skillLoomLogo} 
              alt="Skill Loom" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* PM Modi Photo - Right */}
          <div className="flex items-center">
            <img 
              src={pmModiPhoto} 
              alt="Honorable PM" 
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Blue navigation menu */}
      <div className="bg-[#2674D9] w-full">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-white no-underline px-4 py-3 text-sm font-normal hover:bg-white hover:bg-opacity-10 transition-colors duration-200 whitespace-nowrap"
            >
              Home
            </a>
            <a 
              href="/internship-guidelines" 
              className="text-white no-underline px-4 py-3 text-sm font-normal hover:bg-white hover:bg-opacity-10 transition-colors duration-200 whitespace-nowrap"
            >
              Internship Guidelines
            </a>
            <a 
              href="/education" 
              className="text-white no-underline px-4 py-3 text-sm font-normal hover:bg-white hover:bg-opacity-10 transition-colors duration-200 whitespace-nowrap"
            >
              Education
            </a>
            <a 
              href="/about-us" 
              className="text-white no-underline px-4 py-3 text-sm font-normal hover:bg-white hover:bg-opacity-10 transition-colors duration-200 whitespace-nowrap"
            >
              About us
            </a>
            <a 
              href="/contact" 
              className="text-white no-underline px-4 py-3 text-sm font-normal hover:bg-white hover:bg-opacity-10 transition-colors duration-200 whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb section */}
      <div className="bg-white py-2 px-6 border-t border-gray-200">
        <div className="flex flex-wrap items-center text-xs">
          <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Research and Innovation Excellence</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Quality Assurance in Education</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">National Education Policy 2020 Implementation</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Digital Education Revolution</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Skill Development Programs</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Higher Education Reforms</span>
          <span className="mx-1 text-black">•</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Research and Innovation</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;