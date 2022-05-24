// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcI85MJZF2Eyv5L0HNselesOumaOqc-NY",
  authDomain: "assignment12-ae4ff.firebaseapp.com",
  projectId: "assignment12-ae4ff",
  storageBucket: "assignment12-ae4ff.appspot.com",
  messagingSenderId: "483496489443",
  appId: "1:483496489443:web:62f3595be49ff2a1b1f0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
