// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAKMWpZELsAk-QhP-4KdYXb2J0xuxffsk",
  authDomain: "applebidsapp.firebaseapp.com",
  projectId: "applebidsapp",
  storageBucket: "applebidsapp.appspot.com",
  messagingSenderId: "988400360285",
  appId: "1:988400360285:web:1cd2a586b12b3d0b3966b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
