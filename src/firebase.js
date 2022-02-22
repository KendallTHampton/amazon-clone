import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5PNJCiTZID_9_-YIYbU62eQwKj8O4Ths",
  authDomain: "clone-124b2.firebaseapp.com",
  projectId: "clone-124b2",
  storageBucket: "clone-124b2.appspot.com",
  messagingSenderId: "543595830434",
  appId: "1:543595830434:web:26d23926103da0e99e0bfb",
  measurementId: "G-41ZWPH5RKJ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
