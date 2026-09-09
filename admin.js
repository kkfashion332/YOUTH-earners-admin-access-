Import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, query, onSnapshot, doc, setDoc, getDoc, addDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Tumhara same Firebase Project
const firebaseConfig = {
    apiKey: "AIzaSyA4pTWtUMbZFhrMORZibUhV7gpPRy6DreY",
    authDomain: "youth-earners-d34ca.firebaseapp.com",
    projectId: "youth-earners-d34ca",
    storageBucket: "youth-earners-d34ca.firebasestorage.app",
    messagingSenderId: "568087034965",
    appId: "1:568087034965:web:b4f79488d22db53af128dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// React ko Firebase functions dene ke liye window object ka use
window.db = db;
window.fs = { collection, query, onSnapshot, doc, setDoc, getDoc, addDoc, updateDoc, deleteDoc };

console.log("Admin Firebase Connected Successfully!");
