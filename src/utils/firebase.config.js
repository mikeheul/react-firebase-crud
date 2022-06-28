import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAly8fMq-sKRkt8GnGhixSx-GkQPmtvBss",
  authDomain: "react-firebase-crud-b1eca.firebaseapp.com",
  projectId: "react-firebase-crud-b1eca",
  storageBucket: "react-firebase-crud-b1eca.appspot.com",
  messagingSenderId: "482560737767",
  appId: "1:482560737767:web:bd31f2ba52f0baee26bd42"
};

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;