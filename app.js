 import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful: " + userCredential.user.email);
      window.location.href = "index.html";

    } catch (error) {
      console.log(error);

      alert(
        "Error Code: " + error.code + "\n\n" +
        "Error Message: " + error.message
      );
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});
