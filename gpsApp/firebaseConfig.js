import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwuA9OWkh1Jc99Zr4oDEupoVoWuIZTr8I",
  authDomain: "appgps-592d1.firebaseapp.com",
  projectId: "appgps-592d1",
  storageBucket: "appgps-592d1.firebasestorage.app",
  messagingSenderId: "513171000896",
  appId: "1:513171000896:web:e6a5c3141e2370db1099a5",
  measurementId: "G-20VJWYHBWF"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
