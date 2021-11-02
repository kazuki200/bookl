import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCG90qsELGczdNbo0I1sxPZXCzbwDS1l9M",
  authDomain: "book-7a072.firebaseapp.com",
  projectId: "book-7a072",
  storageBucket: "book-7a072.appspot.com",
  messagingSenderId: "199574733471",
  appId: "1:199574733471:web:479bb326698ce040ed98aa",
  measurementId: "G-1PVZDYYWDG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);