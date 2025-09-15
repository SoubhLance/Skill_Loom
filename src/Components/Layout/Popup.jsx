// src/Components/Popup/WelcomePopup.jsx
import React, { useEffect, useState } from "react";
import PMCard from "../Images/Homepage/PMCard.png"; // adjust path if needed

const WelcomePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      // Show popup only on first visit
      setVisible(true);
      
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        // Mark as seen so it won't show again
        localStorage.setItem('hasSeenWelcomePopup', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    // Mark as seen when user manually closes
    localStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
      <div className="relative p-4 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg w-[600px] max-w-[90vw]">
        {/* Close (X) Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
        >
          ✕
        </button>

        {/* Popup Image */}
        <img
          src={PMCard}
          alt="PM Welcome"
          className="rounded-xl w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default WelcomePopup;