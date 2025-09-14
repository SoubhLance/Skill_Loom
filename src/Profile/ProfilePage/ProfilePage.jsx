import React from "react";
import Sidebar from "../../Components/Layout/Sidebar";
import Lanyard from "../../Components/Images/DashboardImages/Lanyard.png";
import IDCard from "../../Components/Images/DashboardImages/IDCard.png";
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

export default function ProfilePage() {
  return (
    <GovernmentLayout>
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Section */}
        <div className="bg-blue-600 text-white p-4 rounded-t-xl shadow flex items-center justify-between">
          <h1 className="text-lg font-bold">SkillLoom Dashboard</h1>
          <p className="text-sm">Ministry of Education | AI-powered Career Guidance</p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Side: Professional Identity Card Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-2 text-black">Your Professional Identity Card</h2>
            <p className="text-gray-800 mb-4">
              A comprehensive digital identity that showcases your verified skills, education,
              and professional achievements.
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>✔ Unique government-issued ID number</li>
              <li>✔ Verified academic credentials</li>
              <li>✔ Skill certifications and ratings</li>
              <li>✔ QR code for instant verification</li>
              <li>✔ DigiLocker integration</li>
              <li>✔ Mobile-friendly digital wallet</li>
            </ul>
          </div>

          {/* Right Side: Digital ID Card */}
          <div className="relative flex justify-center items-start">
            {/* Lanyard on top */}
            <img src={Lanyard} alt="Lanyard" className="absolute top-0 w-40" />

            {/* ID Card Container - pushed lower */}
            <div className="relative mt-44 w-80 rounded-lg overflow-hidden shadow-lg">
              {/* ID Card Background */}
              <img src={IDCard} alt="ID Card" className="w-full h-full object-cover" />

              {/* Content on top of card */}
              <div className="absolute inset-0 flex flex-col items-center px-4 text-black">
                {/* Profile Photo Placeholder */}
                <div className="mt-20 w-20 h-20 rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-xs text-gray-600">Photo</span>
                </div>

                {/* ID Card Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-lg">PIYUSH SAINI</h3>
                  <p className="text-sm">SRM Institute of Science and Technology, Tamil Nadu</p>
                  <p className="text-xs mt-2">ID No: SL123456789</p>
                  <p className="text-xs">ABC ID: ABC123456789</p>
                  <p className="text-xs">E-mail: hello@reallygreatsite.com</p>
                  <p className="text-xs">Phone: +123-456-7890</p>

                  {/* Key Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <span className="bg-yellow-100 text-black text-xs px-2 py-1 rounded">Python</span>
                    <span className="bg-red-100 text-black text-xs px-2 py-1 rounded">Scammer</span>
                    <span className="bg-orange-100 text-black text-xs px-2 py-1 rounded">Java</span>
                  </div>

                  {/* Validity Info */}
                  <p className="text-xs text-gray-800 mt-3">Valid Until: Dec 2025</p>
                  <p className="text-xs text-gray-800">Issued: 9/10/2024</p>
                  <p className="text-green-600 text-xs mt-2">Digitally verified by Government of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </GovernmentLayout>
  );
}
