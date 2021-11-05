import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey:"秘密",
  authDomain:  "秘密",
  projectId:"秘密",
  storageBucket:  "秘密",
  messagingSenderId: "秘密",
  appId: "秘密",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
