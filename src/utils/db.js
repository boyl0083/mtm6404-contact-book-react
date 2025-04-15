import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRxuVPLyovZs1XSl7JvLEVUuRygxA-8Dc",
  authDomain: "contact-book-fde9e.firebaseapp.com",
  projectId: "contact-book-fde9e",
  storageBucket: "contact-book-fde9e.firebasestorage.app",
  messagingSenderId: "1062905110862",
  appId: "1:1062905110862:web:0eb2a763f52cf71fd8fe1f",
  measurementId: "G-5JGXEX90ZH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
