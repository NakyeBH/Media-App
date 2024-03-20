import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUchdD2Acgxo5HxD9kSxplNmGd5KiCCtI",
  authDomain: "medic-4a73e.firebaseapp.com",
  projectId: "medic-4a73e",
  storageBucket: "medic-4a73e.appspot.com",
  messagingSenderId: "269368374952",
  appId: "1:269368374952:web:98a610727a1d1cc889b49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
