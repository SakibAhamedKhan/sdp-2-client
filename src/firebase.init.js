// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVRSqaP0yjFGmpWQIjMetzm2gArzFZZuc",
  authDomain: "police-identification.firebaseapp.com",
  projectId: "police-identification",
  storageBucket: "police-identification.appspot.com",
  messagingSenderId: "4828925339",
  appId: "1:4828925339:web:b275c0d7a7d1cfd387653e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;