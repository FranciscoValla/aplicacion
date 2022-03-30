
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5u7PHF4Luc8UyUwuvY91br6ebFeOKj3E",
    authDomain: "aplicacion-5ded5.firebaseapp.com",
    projectId: "aplicacion-5ded5",
    storageBucket: "aplicacion-5ded5.appspot.com",
    messagingSenderId: "133068466198",
    appId: "1:133068466198:web:cc69741098ce540ba86d37"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore();