// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjCbQlUBVAVkPtPZM0G_y3gZpVMzN5gMo",
  authDomain: "third-433e8.firebaseapp.com",
  projectId: "third-433e8",
  storageBucket: "third-433e8.appspot.com",
  messagingSenderId: "1045198381787",
  appId: "1:1045198381787:web:8f72bb2621244fa06462fe",
  measurementId: "G-ZHLENVQWSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);