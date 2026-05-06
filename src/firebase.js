// Import core
import { initializeApp } from "firebase/app";

// Import services YOU NEED
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your config (keep as is)
const firebaseConfig = {
  apiKey: "AIzaSyCfjVTHNWY0Uri5vlDZW93a26_dpy6f0Hk",
  authDomain: "kristucoil-church.firebaseapp.com",
  projectId: "kristucoil-church",
  storageBucket: "kristucoil-church.firebasestorage.app",
  messagingSenderId: "267711065231",
  appId: "1:267711065231:web:3010b4f2c13f8b9e50d4fa",
  measurementId: "G-PH8VY6X7TL"
};

// Initialize app
const app = initializeApp(firebaseConfig);

// ✅ ADD THESE (IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);