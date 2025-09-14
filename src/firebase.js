// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUDePPsg7api9N6Tr8552fLlTRfkLmtQk",
  authDomain: "skillloom-f835a.firebaseapp.com",
  projectId: "skillloom-f835a",
  storageBucket: "skillloom-f835a.firebasestorage.app",
  messagingSenderId: "232771254142",
  appId: "1:232771254142:web:03db6a5912a7403d90252f",
  measurementId: "G-02KNZ39NXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Authentication
export const auth = getAuth(app);

// (Optional) Analytics
const analytics = getAnalytics(app);
