import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Programflow from "../Images/Homepage/Programflow.png";
import tricolorBg from "../Images/Homepage/Tricolor.png";
import educationMinister from "../Images/Homepage/EducationMinister.jpg";
import skillLoomLogo from "../Images/NavbarImages/SkillLoomLogo.png";
import Popup from "../Layout/Popup";

// Hero Section Images
import GreenSchool from "../Images/HeroSection/GreenSchool.png";
import mobileApp from "../Images/HeroSection/mobileApp.png";
import nirf from "../Images/HeroSection/nirf.png";
import ntf from "../Images/HeroSection/ntf.png";

// 🔹 Firebase imports
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Homepage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [GreenSchool, mobileApp, nirf, ntf];

  // Auto-change slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle internship sector click
  const handleSectorClick = (sector) => {
    if (user) {
      navigate(`/internships/${sector.toLowerCase()}`);
    } else {
      setShowLoginModal(true);
    }
  };

  // 🔹 Handle Login / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "signup") {
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
      setShowLoginModal(false);
      navigate("/resume-upload");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  // 🔹 Handle Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      setShowLoginModal(false);
      navigate("/resume-upload");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  // 🔹 Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="shadow-xl rounded-2xl w-full max-w-sm relative overflow-hidden">
        <img
          src={tricolorBg}
          alt="Tricolor Background"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-100"
        />
        <div className="relative z-10 p-6">
          {/* Close button */}
          <button
            onClick={() => setShowLoginModal(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl font-bold"
          >
            ×
          </button>

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
                  ? "border-b-2 border-orange-300 text-orange-400"
                  : "hover:border-b-2 hover:border-orange-400 hover:text-orange-600"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`pb-1 transition-all ${
                activeTab === "signup"
                  ? "border-b-2 border-orange-300 text-orange-400"
                  : "hover:border-b-2 hover:border-orange-200 hover:text-orange-300"
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
                ? "Please login to access internships."
                : "Create your account to get started."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {activeTab === "signup" && (
              <div>
                <label className="block text-xs font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-medium">Password</label>
                {activeTab === "login" && (
                  <a
                    href="#"
                    className="text-xs text-orange-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                type="password"
                placeholder={
                  activeTab === "login"
                    ? "Enter your password"
                    : "Create a password"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            {activeTab === "signup" && (
              <div>
                <label className="block text-xs font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-xs focus:outline-none focus:ring focus:ring-orange-200"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium text-sm hover:from-orange-700 hover:to-orange-800 transition-all"
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
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-orange-50 hover:border-orange-200 transition-all"
            >
              <i className="fa-brands fa-google text-orange-400"></i>{" "}
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-xs hover:bg-orange-50 hover:border-orange-200 transition-all">
              <i className="fa-solid fa-phone text-orange-400"></i>{" "}
              Continue with Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Popup />

      {/* Login Modal */}
      {showLoginModal && <LoginModal />}

      {/* Hero Section Slider */}
      <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden bg-gradient-to-r from-blue-50 to-orange-50 mt-4 mb-6">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Government Initiative ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-orange-500 w-6"
                  : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 mb-8">
            {/* Minister's Message */}
            <div className="bg-white shadow-xl rounded-2xl p-8 flex-1 max-w-4xl">
              <div className="bg-blue-800 text-white text-center py-4 -mx-8 -mt-8 mb-8 rounded-t-2xl">
                <h3 className="text-lg font-semibold">
                  Honourable Minister's Message
                </h3>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-orange-200 shadow-lg">
                  <img
                    src={educationMinister}
                    alt="Shri Dharmendra Pradhan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Shri Dharmendra Pradhan
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-8">
                  Minister of Education, Government of India
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-inner">
                  <p className="text-base text-gray-700 leading-relaxed text-left italic">
                    "Education is the foundation of our nation's progress.
                    Through the National Education Policy 2020 and digital
                    initiatives like DIKSHA and SWAYAM, we are creating an
                    inclusive learning ecosystem. SkillLoom embodies our vision
                    of skill-based education and industry collaboration,
                    preparing students for tomorrow's challenges."
                  </p>
                  <div className="text-right mt-4">
                    <p className="text-sm font-semibold text-gray-600">
                      - Shri Dharmendra Pradhan
                    </p>
                    <p className="text-xs text-gray-500">
                      Minister of Education & Skill Development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔹 User / Login Card */}
            {!user && (
              <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-sm border border-gray-200 text-center flex flex-col justify-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-500 text-white flex items-center justify-center rounded-full shadow-lg">
                  <i className="fa-solid fa-lock text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Join SkillLoom
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Login or sign up to explore internships, upload your resume,
                  and access personalized recommendations.
                </p>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold text-sm shadow-md hover:from-orange-500 hover:to-orange-600 transition-all"
                >
                  Login / Sign Up
                </button>
              </div>
            )}

            {user && (
              <div className="bg-gradient-to-br from-green-50 to-green-100 shadow-2xl rounded-3xl p-8 w-full max-w-sm border border-green-200 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-300 rounded-full opacity-20 blur-3xl"></div>

                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-white border-4 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className="fa-solid fa-user text-green-600 text-3xl"></i>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    Welcome back!
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 bg-white/70 inline-block px-3 py-1 rounded-full shadow-sm">
                    {user.email}
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm shadow-md hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      Go to Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-sm shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Our Internship Sectors Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Internship Sectors</h2>
              <p className="text-lg text-gray-600">Explore diverse career opportunities across various industries</p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Agriculture */}
              <div 
                className="relative bg-white border-[8px] border-green-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Agriculture')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-seedling absolute text-green-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-green-700 transition-colors duration-500">
                  Agriculture
                </h3>
              </div>

              {/* Automobile */}
              <div 
                className="relative bg-white border-[8px] border-red-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Automobile')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-red-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-car absolute text-red-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-red-700 transition-colors duration-500">
                  Automobile
                </h3>
              </div>

              {/* Finance */}
              <div 
                className="relative bg-white border-[8px] border-yellow-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Finance')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-coins absolute text-yellow-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-yellow-600 transition-colors duration-500">
                  Finance
                </h3>
              </div>

              {/* Healthcare */}
              <div 
                className="relative bg-white border-[8px] border-pink-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Healthcare')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-heartbeat absolute text-pink-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-pink-700 transition-colors duration-500">
                  Healthcare
                </h3>
              </div>

              {/* ITI */}
              <div 
                className="relative bg-white border-[8px] border-blue-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('ITI')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-microchip absolute text-blue-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-blue-700 transition-colors duration-500">
                  ITI
                </h3>
              </div>

              {/* Manufacturing */}
              <div 
                className="relative bg-white border-[8px] border-gray-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Manufacturing')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-industry absolute text-gray-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-gray-700 transition-colors duration-500">
                  Manufacturing
                </h3>
              </div>

              {/* Space */}
              <div 
                className="relative bg-white border-[8px] border-purple-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Space')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-rocket absolute text-purple-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-purple-700 transition-colors duration-500">
                  Space
                </h3>
              </div>

              {/* Technology */}
              <div 
                className="relative bg-white border-[8px] border-blue-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Technology')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-laptop-code absolute text-blue-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-blue-700 transition-colors duration-500">
                  Technology
                </h3>
              </div>

              {/* Tourism */}
              <div 
                className="relative bg-white border-[8px] border-teal-500 rounded-xl shadow p-10 text-center overflow-hidden cursor-pointer 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 group"
                onClick={() => handleSectorClick('Tourism')}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <i className="fa-solid fa-mountain-sun absolute text-teal-500 text-9xl opacity-20 -right-8 -bottom-6 group-hover:opacity-40 transition-all duration-500"></i>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 group-hover:text-teal-700 transition-colors duration-500">
                  Tourism
                </h3>
              </div>
            </div>
          </div>

          {/* Policy Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* National Education Policy 2020 */}
            <div className="bg-white rounded-xl shadow-md border border-orange-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">National Education Policy 2020</h3>
              </div>
              <div className="p-6 space-y-3">
                {[
                  "Holistic and Multidisciplinary Education",
                  "Critical Thinking and Creativity",
                  "Technology Integration",
                  "Skill-based Learning",
                ].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center text-gray-700 text-sm before:content-['•'] before:text-orange-500 before:mr-2"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Digital India in Education */}
            <div className="bg-white rounded-xl shadow-md border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Digital India in Education</h3>
              </div>
              <div className="p-6 space-y-3">
                {[
                  "DIKSHA Platform",
                  "PM eVIDYA Programme",
                  "SWAYAM Online Courses",
                  "Digital Infrastructure",
                ].map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center text-gray-700 text-sm before:content-['•'] before:text-blue-500 before:mr-2"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AICTE Section */}
          <div className="bg-white rounded-xl shadow-md border border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 flex items-center">
              <span className="text-xl mr-3 leading-none"></span>
              <h3 className="text-lg font-semibold">AICTE - Technical Education</h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Initiatives */}
                <div>
                  <h4 className="text-purple-600 font-semibold mb-4">AICTE Initiatives</h4>
                  <div className="space-y-3">
                    {[
                      "Technical Institution Approval",
                      "Quality Enhancement Programs",
                      "Industry-Academia Partnership",
                      "Research & Innovation",
                    ].map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center text-gray-700 text-sm before:content-['•'] before:text-purple-500 before:mr-2"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Services */}
                <div>
                  <h4 className="text-green-600 font-semibold mb-4">Student Services</h4>
                  <div className="space-y-3">
                    {[
                      "Online Grievance System",
                      "Student Feedback Portal",
                      "Institution Verification",
                      "Approval Process Status",
                    ].map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center text-gray-700 text-sm before:content-['•'] before:text-green-500 before:mr-2"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why SkillLoom Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3 leading-none">•</span>
                <h3 className="text-lg font-semibold">What is SkillLoom?</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Video Section */}
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/tMecymyZOqs"
                    title="SkillLoom - AI-Based Internship Recommendation Engine"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

              {/* Why SkillLoom Content */}
              <div>
                <h4 className="text-orange-700 font-semibold mb-4 text-xl">
                  Why SkillLoom?
                </h4>
                <div className="space-y-4">
                  {[
                    "It helps students find personalized internship opportunities based on their skills, education profile, and career goals.",
                    "Uses AI/ML models to match students' skills with industry requirements.",
                    "Saves time by directly connecting students with the most relevant internships instead of browsing through irrelevant ones.",
                    "Builds a stronger bridge between education and industry for India's youth.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start text-gray-700">
                      <span className="text-orange-500 mr-3 text-lg flex-shrink-0 leading-none"></span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
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
