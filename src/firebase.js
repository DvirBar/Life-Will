// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_ncsfEvgnPM9HLubVjyzsAmV4FoR5MuY",
    authDomain: "life-will.firebaseapp.com",
    projectId: "life-will",
    storageBucket: "life-will.appspot.com",
    messagingSenderId: "363318467690",
    appId: "1:363318467690:web:3d2105794909dc1428be13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)