// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Teh_5ro0M78bxXuJBtJLPri-0f62Xo0",
  authDomain: "portfolio-b4506.firebaseapp.com",
  projectId: "portfolio-b4506",
  storageBucket: "portfolio-b4506.firebasestorage.app",
  messagingSenderId: "316272592873",
  appId: "1:316272592873:web:70d8aef71604c73b4d6d78",
  measurementId: "G-0VFN60YL0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);