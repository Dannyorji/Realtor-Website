// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0J4WSoWOaHUnGskAQoLkXCtSzmIccT3k",
  authDomain: "realtor-website-react.firebaseapp.com",
  projectId: "realtor-website-react",
  storageBucket: "realtor-website-react.appspot.com",
  messagingSenderId: "195476784383",
  appId: "1:195476784383:web:995af9f1bac329774b38ca",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
