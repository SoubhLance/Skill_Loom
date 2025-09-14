// src/Components/Popup/WelcomePopup.jsx
import React, { useEffect, useState } from "react";
import PMCard from "../Images/Homepage/PMCard.png"; // adjust path if needed

const WelcomePopup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 backdrop-blur-md z-50">
      <div className="relative p-4 rounded-2xl shadow-xl bg-none backdrop-blur-lg w-[600px] max-w-[90vw]">
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