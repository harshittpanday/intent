import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY056QzcvD41ofuTerGgPoPriWSlfWAHA",
  authDomain: "intent-io.firebaseapp.com",
  projectId: "intent-io",
  storageBucket: "intent-io.firebasestorage.app",
  messagingSenderId: "156235136503",
  appId: "1:156235136503:web:6cc115dc09691df84042f2",
  measurementId: "G-NYTB39RH20"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);