// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrRpU8re4pt7wEnO-ySVowDtYr2SBJyo",
  authDomain: "todo-app-db93b.firebaseapp.com",
  projectId: "todo-app-db93b",
  storageBucket: "todo-app-db93b.appspot.com",
  messagingSenderId: "35315226392",
  appId: "1:35315226392:web:44fa225fb8d4884d04f06d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);