// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAlzh4sjy82c1UQ3y8kJb0bM62fQNozQYU",
    authDomain: "dentalclinic-26009.firebaseapp.com",
    projectId: "dentalclinic-26009",
    storageBucket: "dentalclinic-26009.appspot.com",
    messagingSenderId: "923053365138",
    appId: "1:923053365138:web:10aef14b9561f26c37934b",
    measurementId: "G-NV3Y5DB4Z8"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
