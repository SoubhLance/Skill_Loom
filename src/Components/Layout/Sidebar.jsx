import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Doculoom", path: "/" },
    { name: " Internships", path: "/" },
    { name: "My Internships", path: "/" },
    { name: "Profile", path: "/profile" },
    
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-orange-500 mb-8">Skill Loom</h2>
      <div className="flex flex-col space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-semibold text-sm ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-orange-500 bg-white hover:bg-orange-100"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
