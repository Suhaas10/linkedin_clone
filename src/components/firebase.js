import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb1dH8WoYJmMSgnKC0x4R2PrjydCJ_24I",
  authDomain: "linkedinclone-f979d.firebaseapp.com",
  projectId: "linkedinclone-f979d",
  storageBucket: "linkedinclone-f979d.appspot.com",
  messagingSenderId: "575931431178",
  appId: "1:575931431178:web:ccffc361dd4ecb2486e2f3",
  measurementId: "G-Y62B46REBT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
