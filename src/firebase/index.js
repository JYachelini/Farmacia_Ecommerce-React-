import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh3lkAQvf8AnrxHcYKU00Sbnszufkh_0E",
  authDomain: "farmacia-ecommerce.firebaseapp.com",
  projectId: "farmacia-ecommerce",
  storageBucket: "farmacia-ecommerce.appspot.com",
  messagingSenderId: "413500906400",
  appId: "1:413500906400:web:6192ce3ffd10c55e2ca2c5",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
