// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: "blog-93c9c.firebaseapp.com",
      projectId: "blog-93c9c",
      storageBucket: "blog-93c9c.appspot.com",
      messagingSenderId: "858523894885",
      appId: "1:858523894885:web:39affd4ec9a18f3f1eb28c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
