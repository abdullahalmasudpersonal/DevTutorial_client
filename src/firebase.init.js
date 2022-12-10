// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/Auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe13-WdfgiIq_2ldR5M0Z0xj9bBsYX2Fg",
    authDomain: "devs-tutorial.firebaseapp.com",
    projectId: "devs-tutorial",
    storageBucket: "devs-tutorial.appspot.com",
    messagingSenderId: "11566781901",
    appId: "1:11566781901:web:3f2409616ea313e83f6084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);