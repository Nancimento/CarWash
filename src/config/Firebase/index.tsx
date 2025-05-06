import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import app from '@react-native-firebase/app';

// Initialize Firebase if not already initialized
if (!app().apps.length) {
  app.initializeApp({
    apiKey: "AIzaSyAwOad7heyFkZCwu-o5uNBvzPjizgWAjfg",
    authDomain: "carwash-6ff90.firebaseapp.com",
    databaseURL: "https://carwash-6ff90-default-rtdb.firebaseio.com",
    projectId: "carwash-6ff90",
    storageBucket: "carwash-6ff90.firebasestorage.app",
    messagingSenderId: "365284904981",
    appId: "1:365284904981:web:08609915b336933b347e1c"
  });
}

export { app, auth, firestore };