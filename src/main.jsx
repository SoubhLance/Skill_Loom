import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // <-- import createRoot
import App from "./App.jsx";
import "./index.css"; // Tailwind CSS

const container = document.getElementById("root");
const root = createRoot(container); // create root
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
