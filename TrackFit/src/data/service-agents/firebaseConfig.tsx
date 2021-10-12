/**
 * This contains the code to configure and initalize the database within the app.
 * 
 * Reference: https://firebase.google.com/docs/web/setup
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import "firebase/firestore"

// Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyCggVJukRAaf3IV6mcDhW1tBY9ovwaIZSo",
  authDomain: "trackfit-database.firebaseapp.com",
  projectId: "trackfit-database",
  storageBucket: "trackfit-database.appspot.com",
  messagingSenderId: "411886683058",
  appId: "1:411886683058:web:43049198bfd87f59b8daab",
  measurementId: "G-PNZ80BXNKB"
};

// Intialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;