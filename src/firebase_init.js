// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf5yxOFaKrOn2p8EGbP7XBJMPalmtPjOk",
  authDomain: "login-registration-auth-8955a.firebaseapp.com",
  projectId: "login-registration-auth-8955a",
  storageBucket: "login-registration-auth-8955a.firebasestorage.app",
  messagingSenderId: "890032765614",
  appId: "1:890032765614:web:0091cb82aca35e18cb0b3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
