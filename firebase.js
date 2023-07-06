import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDs35mElv7Dj5t_Gf8QbMBxoa2jXpwUzD8",
    authDomain: "booking-app-225a3.firebaseapp.com",
    projectId: "booking-app-225a3",
    storageBucket: "booking-app-225a3.appspot.com",
    messagingSenderId: "572356828579",
    appId: "1:572356828579:web:de49049f63b9c110efce16"
};
  
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };