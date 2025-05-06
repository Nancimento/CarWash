import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Tambahkan ini
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
    apiKey: 'AIzaSyAwOad7heyFkZCwu-o5uNBvzPjizgWAjfg',
    authDomain: 'carwash-6ff90.firebaseapp.com',
    databaseURL: 'https://carwash-6ff90-default-rtdb.firebaseio.com',
    projectId: 'carwash-6ff90',
    storageBucket: 'carwash-6ff90.appspot.com',
    messagingSenderId: '365284904981',
    appId: '1:365284904981:web:08609915b336933b347e1c',
   
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app); // Tambahkan inisialisasi Firestore

export { app, auth, firestore };