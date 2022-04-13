// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY__RXooFseI5onwBw-deiePwKNKsLee0",
  authDomain: "ema-john-simple-59-faf20.firebaseapp.com",
  projectId: "ema-john-simple-59-faf20",
  storageBucket: "ema-john-simple-59-faf20.appspot.com",
  messagingSenderId: "651538028285",
  appId: "1:651538028285:web:7870b0b05b7d2344829094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;