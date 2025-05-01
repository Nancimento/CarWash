// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwOad7heyFkZCwu-o5uNBvzPjizgWAjfg",
  authDomain: "carwash-6ff90.firebaseapp.com",
  databaseURL: "https://carwash-6ff90-default-rtdb.firebaseio.com",
  projectId: "carwash-6ff90",
  storageBucket: "carwash-6ff90.firebasestorage.app",
  messagingSenderId: "365284904981",
  appId: "1:365284904981:web:08609915b336933b347e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;