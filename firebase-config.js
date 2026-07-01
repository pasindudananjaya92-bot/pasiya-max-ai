 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDP7gPpCAiYTMoanWos26B3wAk1C_KCtc",
  authDomain: "pasiya-max.firebaseapp.com",
  projectId: "pasiya-max",
  storageBucket: "pasiya-max.firebasestorage.app",
  messagingSenderId: "109296109305",
  appId: "1:109296109305:web:2b63f863cfcbc15ced4428",
  measurementId: "G-Y1JHZ8G438"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
