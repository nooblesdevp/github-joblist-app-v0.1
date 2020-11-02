import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJirLdILZ90thE5A-P2H4sIB7aAGiDwCo",
  authDomain: "github-jobslist.firebaseapp.com",
  databaseURL: "https://github-jobslist.firebaseio.com",
  projectId: "github-jobslist",
  storageBucket: "github-jobslist.appspot.com",
  messagingSenderId: "538697452856",
  appId: "1:538697452856:web:b053f67084c13fc6a285cd",
  measurementId: "G-K5TFBVS4BD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
