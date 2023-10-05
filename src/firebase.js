// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBVqlUcJTysGKf3NDhcQi214OhmctiSMO4",

    authDomain: "capstore-6f558.firebaseapp.com",

    projectId: "capstore-6f558",

    storageBucket: "capstore-6f558.appspot.com",

    messagingSenderId: "369834737068",

    appId: "1:369834737068:web:841be6d59ae653119f0e09",

    measurementId: "G-S57N1EDC4V"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);