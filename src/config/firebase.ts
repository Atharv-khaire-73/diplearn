import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA4i3qXvu2IWlkKrlPlwAMwe1xBvUcTgKI",
  authDomain: "diplearn-c7039.firebaseapp.com",
  projectId: "diplearn-c7039",
  storageBucket: "diplearn-c7039.firebasestorage.app",
  messagingSenderId: "87420881206",
  appId: "1:87420881206:web:6603daf4055740bc72cb97",
  measurementId: "G-7GTGHJGLC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  // Check if analytics is supported before initializing
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(error => {
    console.error("Firebase Analytics error:", error);
  });
}

export { app, db, analytics }; 