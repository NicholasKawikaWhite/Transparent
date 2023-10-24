// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqWStbAZeOHJbCy-NvNcn3ue6KO5rZ1Vc",
  authDomain: "transparent-77dc0.firebaseapp.com",
  projectId: "transparent-77dc0",
  storageBucket: "transparent-77dc0.appspot.com",
  messagingSenderId: "517024350608",
  appId: "1:517024350608:web:5b84d1e835bed7ac54f315",
  measurementId: "G-8KP8QTNHEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {auth, app};
