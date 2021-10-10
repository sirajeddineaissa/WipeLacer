import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "wipelacer-adb0e.firebaseapp.com",
  projectId: "wipelacer-adb0e",
  storageBucket: "wipelacer-adb0e.appspot.com",
  messagingSenderId: "914182440059",
  appId: "1:914182440059:web:52fa69d6e4b254c24b0ede"
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
