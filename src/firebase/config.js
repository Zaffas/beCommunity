// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDffs9ebB-1-X-J0J6TF3AmNIOob2NMfjU",
  authDomain: "becommunity.firebaseapp.com",
  projectId: "becommunity",
  storageBucket: "becommunity.appspot.com",
  messagingSenderId: "538023031216",
  appId: "1:538023031216:web:71c7833e2c2456da2fa675",
  measurementId: "G-0EQL5S7XGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
