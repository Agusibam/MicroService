// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-X1YfvstyYHLC5_ijxvg6R4hnz3WrdsE",
  authDomain: "testerr-2bba4.firebaseapp.com",
  projectId: "testerr-2bba4",
  storageBucket: "testerr-2bba4.appspot.com",
  messagingSenderId: "989196855572",
  appId: "1:989196855572:web:28925d840037e4c2c1ba01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);