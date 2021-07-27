import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6XFhshyoLLCLvUqnscTDCo0X6rmSSY9U",
  authDomain: "wipelacer-adb0e.firebaseapp.com",
  projectId: "wipelacer-adb0e",
  storageBucket: "wipelacer-adb0e.appspot.com",
  messagingSenderId: "914182440059",
  appId: "1:914182440059:web:52fa69d6e4b254c24b0ede"
});

export const auth = app.auth();
export const db = app.firestore();
export default app;