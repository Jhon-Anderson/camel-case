// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh7U8BBfZxudsxK-FWf_xpcFrzd33vsLE",
  authDomain: "kebab-case-1.firebaseapp.com",
  projectId: "kebab-case-1",
  storageBucket: "kebab-case-1.appspot.com",
  messagingSenderId: "878472475362",
  appId: "1:878472475362:web:deac9c0a0a8286f92024bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;