import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added missing import
import GovernmentLayout from "../../Components/Layout/GovernmentLayout";

export default function ProfileForm() {
  const navigate = useNavigate(); // Added useNavigate hook

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    gender: "",
    bloodGroup: "",
    qualification: "",
    collegeName: "",
    yearOfStudy: "",
    rollNumber: "",
    email: "",
    emailOtp: "",
    phoneNumber: "",
    phoneOtp: "",
    aadharNumber: "",
    skills: "",
    interest: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmailOTP = () => {
    if (formData.email) {
      alert("Email OTP sent successfully!");
    } else {
      alert("Please enter your email address first");
    }
  };

  const sendPhoneOTP = () => {
    if (formData.phoneNumber) {
      alert("Phone OTP sent successfully!");
    } else {
      alert("Please enter your phone number first");
    }
  };

  const handleSubmit = () => {
    // check if all fields are filled
    for (let key in formData) {
      if (!formData[key].trim()) {
        alert("⚠ Please fill all required fields.");
        return;
      }
    }

    console.log("Form submitted:", formData);
    alert("✅ Profile setup completed successfully!");
  };

  return (
    <GovernmentLayout>
      <div className="min-h-screen bg-gray-100">
        {/* Back Button */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <button
              onClick={() => navigate("/resume-upload")}
              className="flex items-center space-x-2 text-blue-600 hover:underline text-sm"
            >
              <span className="text-lg">←</span>
              <span>Back</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                <span className="text-2xl font-bold">✔</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Enter Your Details
              </h2>
              <p className="text-sm text-gray-600">
                All fields are mandatory to complete your profile
              </p>
            </div>

            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    placeholder="Full Name *"
                  />
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    placeholder="Father Name *"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Gender *</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Blood Group *</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Education Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Select Qualification *</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="graduation">Graduation</option>
                    <option value="post-graduation">Post Graduation</option>
                  </select>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    placeholder="College/University *"
                  />
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                  >
                    <option value="">Year of Study *</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="completed">Completed</option>
                  </select>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                    placeholder="Roll Number *"
                  />
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {/* Email with OTP */}
                  <div>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex-1 border p-2 rounded"
                        placeholder="Email *"
                      />
                      <button
                        type="button"
                        onClick={sendEmailOTP}
                        className="bg-green-600 text-white px-3 rounded"
                      >
                        Send OTP
                      </button>
                    </div>
                    <input
                      type="text"
                      name="emailOtp"
                      value={formData.emailOtp}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                      placeholder="Enter Email OTP *"
                    />
                  </div>

                  {/* Phone with OTP */}
                  <div>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="flex-1 border p-2 rounded"
                        placeholder="Phone Number *"
                      />
                      <button
                        type="button"
                        onClick={sendPhoneOTP}
                        className="bg-green-600 text-white px-3 rounded"
                      >
                        Send OTP
                      </button>
                    </div>
                    <input
                      type="text"
                      name="phoneOtp"
                      value={formData.phoneOtp}
                      onChange={handleInputChange}
                      className="border p-2 rounded w-full"
                      placeholder="Enter Phone OTP *"
                    />
                  </div>

                  {/* ABC ID */}
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formData.aadharNumber}
                    onChange={handleInputChange}
                    className="border p-2 rounded w-full"
                    placeholder="ABC ID *"
                  />
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Skills & Interests
                </h3>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  placeholder="Enter skills (comma separated) *"
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="mt-3 border p-2 rounded w-full"
                >
                  <option value="">Select Area of Interest *</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="finance">Finance</option>
                  <option value="government">Government</option>
                </select>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600"
                >
                  Complete Setup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GovernmentLayout>
  );
}