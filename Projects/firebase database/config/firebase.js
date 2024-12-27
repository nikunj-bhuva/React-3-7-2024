// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu1QhLqhR9nUKtmcVehDPyCwrG-0fb4RI",
  authDomain: "fir-database-ccbf4.firebaseapp.com",
  projectId: "fir-database-ccbf4",
  storageBucket: "fir-database-ccbf4.firebasestorage.app",
  messagingSenderId: "613767183242",
  appId: "1:613767183242:web:1d9ad7619d35efb071e673",
  measurementId: "G-YWG88RQK1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
