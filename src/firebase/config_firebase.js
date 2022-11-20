import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCAUib1RntAs3xtsm2LLbzime3ZTqSSb9A",
    authDomain: "contabilidad-cd055.firebaseapp.com",
    projectId: "contabilidad-cd055",
    storageBucket: "contabilidad-cd055.appspot.com",
    messagingSenderId: "330396301847",
    appId: "1:330396301847:web:800781e48dcd0088b63a52"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase,db , googleAuthProvider };