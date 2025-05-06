import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


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
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;