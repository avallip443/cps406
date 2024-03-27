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
  apiKey: "AIzaSyDie27KvLDQ4ZFLA4ZCQ5HC8J343mqssNY",
  authDomain: "cps406-13dd4.firebaseapp.com",
  projectId: "cps406-13dd4",
  storageBucket: "cps406-13dd4.appspot.com",
  messagingSenderId: "426562246126",
  appId: "1:426562246126:web:67fa22fb28398530afaaff",
  measurementId: "G-STL78ZNH20"
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
