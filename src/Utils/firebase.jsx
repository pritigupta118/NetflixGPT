// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYgtRGXS5-rCpPPhEj1NeWn_sHaMS25Nw",
  authDomain: "netflixgpt-5bdc7.firebaseapp.com",
  projectId: "netflixgpt-5bdc7",
  storageBucket: "netflixgpt-5bdc7.appspot.com",
  messagingSenderId: "4761433353",
  appId: "1:4761433353:web:28054a97166f2c0c2a4fd8",
  measurementId: "G-24K2S6B6M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();