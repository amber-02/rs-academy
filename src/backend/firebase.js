
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHg49bjkNXWW-WomVcvPqag5u90vHvQwU",
  databaseURL: "https://test-ec692-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "test-ec692.firebaseapp.com",
  projectId: "test-ec692",
  storageBucket: "test-ec692.appspot.com",
  messagingSenderId: "85510728078",
  appId: "1:85510728078:web:bbc84b1ec535aab9dd5cdf",
  measurementId: "G-2ZJT56JDE4"
};

const organiserfirebaseConfig = {
  apiKey: "AIzaSyDS2AE0Wc9AkQDvgHezMcerCywncC8wYBY",
  databaseURL: "https://organiserauth-b3a67-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "organiserauth-b3a67.firebaseapp.com",
  projectId: "organiserauth-b3a67",
  storageBucket: "organiserauth-b3a67.appspot.com",
  messagingSenderId: "505832737368",
  appId: "1:505832737368:web:e64e9e22a72116f3fcd82d",
  measurementId: "G-TEGM9VEFNG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig, 'student');
const auth = getAuth(app);
const db = getDatabase(app);

const Organiserapp = initializeApp(organiserfirebaseConfig, 'organiser');
const Organiserauth = getAuth(Organiserapp);
const Organiserdb = getDatabase(Organiserapp);

export { auth, db, Organiserauth, Organiserdb };

