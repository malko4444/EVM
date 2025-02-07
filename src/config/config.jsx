// src/config/firebase.js
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyDngPWx_gJBkYzQlg53uO6uyVNhI2_UgR8",
  authDomain: "e-commerce-site-d82b9.firebaseapp.com",
  projectId: "e-commerce-site-d82b9",
  storageBucket: "e-commerce-site-d82b9.firebasestorage.app",
  messagingSenderId: "1068604315077",
  appId: "1:1068604315077:web:6eb3d8a13f3ea6c17667ac",
  measurementId: "G-S3JB026Z62"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
