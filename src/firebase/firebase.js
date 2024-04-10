// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZRToZ6C3uzOk1pit28PTQcuxeVXA2QfA",
  authDomain: "cps406-dd9cd.firebaseapp.com",
  projectId: "cps406-dd9cd",
  storageBucket: "cps406-dd9cd.appspot.com",
  messagingSenderId: "291535654334",
  appId: "1:291535654334:web:d93b66bd9be7c3bc1ebdef",
  measurementId: "G-GPQ0P5B0MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// authentication system stores users login
const auth = getAuth(app);

// database stores information about users and posts
// TODO: set user info included
// TODO: set bug info included 
const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, auth, firestore, storage };
