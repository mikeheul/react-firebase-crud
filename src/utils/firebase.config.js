import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-crud-b1eca.firebaseapp.com",
  projectId: "react-firebase-crud-b1eca",
  storageBucket: "react-firebase-crud-b1eca.appspot.com",
  messagingSenderId: "482560737767",
  appId: "1:482560737767:web:bd31f2ba52f0baee26bd42"
});

// Initialize Firebase
export const auth = app.auth();