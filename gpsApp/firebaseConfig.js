// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, colection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwuA9OWkh1Jc99Zr4oDEupoVoWuIZTr8I",
  authDomain: "appgps-592d1.firebaseapp.com",
  projectId: "appgps-592d1",
  storageBucket: "appgps-592d1.firebasestorage.app",
  messagingSenderId: "513171000896",
  appId: "1:513171000896:web:e6a5c3141e2370db1099a5",
  measurementId: "G-20VJWYHBWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, getDocs, getFirestore, colection, auth, app };