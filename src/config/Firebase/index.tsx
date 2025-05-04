// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Konfigurasi Firebase dari Console
const firebaseConfig = {
  apiKey: 'AIzaSyAwOad7heyFkZCwu-o5uNBvzPjizgWAjfg',
  authDomain: 'carwash-6ff90.firebaseapp.com',
  databaseURL: 'https://carwash-6ff90-default-rtdb.firebaseio.com',
  projectId: 'carwash-6ff90',
  storageBucket: 'carwash-6ff90.appspot.com',
  messagingSenderId: '365284904981',
  appId: '1:365284904981:web:08609915b336933b347e1c',
};

// Inisialisasi hanya sekali
const app = initializeApp(firebaseConfig);

// Ekspor auth & database agar bisa dipakai di mana saja
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
