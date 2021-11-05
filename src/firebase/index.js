import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyAP6Q2LwzPekDnXSJR-xAZq5Qu1vrGI4Oo",
  authDomain:  "book-ll.firebaseapp.com",
  projectId:"book-ll",
  storageBucket:  "book-ll.appspot.com",
  messagingSenderId: "229545065099",
  appId: "1:229545065099:web:05ffc380b6d0f3717cb28e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
