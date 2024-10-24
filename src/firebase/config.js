// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2yamTiCo7XNaEtiakTCTqXGb-WwDUYw0",
  authDomain: "plenzsneakers.firebaseapp.com",
  projectId: "plenzsneakers",
  storageBucket: "plenzsneakers.appspot.com",
  messagingSenderId: "120751883592",
  appId: "1:120751883592:web:1c2fccf0619a8557885f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

