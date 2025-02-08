// src/config/firebase.js
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCDPxk8Npg_Ddlu_EK6h_H__qseS-GSJUw",
  authDomain: "pevm-8b043.firebaseapp.com",
  projectId: "pevm-8b043",
  storageBucket: "pevm-8b043.firebasestorage.app",
  messagingSenderId: "1045235452778",
  appId: "1:1045235452778:web:d2a517a596fb0394667313",
  measurementId: "G-CXG8YTNM3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);