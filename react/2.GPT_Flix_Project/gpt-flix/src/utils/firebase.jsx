// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuHdP0OY-5ALDbkKDzZAcT31TvIFVUA5c",
  authDomain: "gptflix-a47a4.firebaseapp.com",
  projectId: "gptflix-a47a4",
  storageBucket: "gptflix-a47a4.appspot.com",
  messagingSenderId: "135059636328",
  appId: "1:135059636328:web:fcd7792baa5a85d5aebbdd",
  measurementId: "G-MHL3HJGT9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
