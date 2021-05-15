import App from "./App.svelte";
import "./index.css";
import { initializeApp } from "firebase/app";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

initializeApp({
  apiKey: "AIzaSyDcx5xDlQS3ixEFF8mESoxUzTk9f56uQhA",
  authDomain: "wiggles-f0bd9.firebaseapp.com",
  databaseURL: "https://wiggles-f0bd9.firebaseio.com",
  projectId: "wiggles-f0bd9",
  storageBucket: "wiggles-f0bd9.appspot.com",
  messagingSenderId: "837754270874",
  appId: "1:837754270874:web:4760e51978d04dfb",
});

new App({
  target: document.body,
});
