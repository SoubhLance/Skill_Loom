import React from "react";
import Navbar from "../Navbar/Navbar";   // ✅ Correct relative path
import Footer from "../Footer/Footer";   // ✅ Correct relative path

const GovernmentLayout = ({ children }) => {
  return (
    <div className="w-full font-sans">
      {/* ✅ Common Navbar */}
      <Navbar />

      {/* ✅ Page-specific content */}
      <main className="min-h-screen">{children}</main>

      {/* ✅ Common Footer */}
      <Footer />
    </div>
  );
};

export default GovernmentLayout;
