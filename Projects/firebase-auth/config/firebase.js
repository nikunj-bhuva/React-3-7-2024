import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcyeLO_E8KSKGcaLNAyYdW8fozrMqAg4g",
  authDomain: "fir-auth-da48d.firebaseapp.com",
  projectId: "fir-auth-da48d",
  storageBucket: "fir-auth-da48d.appspot.com",
  messagingSenderId: "1075317885411",
  appId: "1:1075317885411:web:9936cc915f75fececfb8d6",
  measurementId: "G-BZBRNTP5TN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
