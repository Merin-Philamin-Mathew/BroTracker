// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7_DVGzLrM7DQZ2pc4kgZk500rHGEnECk",
  authDomain: "brotracker-d4cf3.firebaseapp.com",
  projectId: "brotracker-d4cf3",
  storageBucket: "brotracker-d4cf3.appspot.com",
  messagingSenderId: "867750304923",
  appId: "1:867750304923:web:eb6417620218a5b05dba3e",
  measurementId: "G-5W8KXE242T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export default db