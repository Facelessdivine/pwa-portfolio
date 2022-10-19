
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyARGaBm1xkh-cYjw24RPOxx2r9bxt2BO4M",
  authDomain: "portfolio-e15e5.firebaseapp.com",
  projectId: "portfolio-e15e5",
  storageBucket: "portfolio-e15e5.appspot.com",
  messagingSenderId: "151254442503",
  appId: "1:151254442503:web:08376ff238b8e0307800a2",
  measurementId: "G-WN5CGFQW7K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);