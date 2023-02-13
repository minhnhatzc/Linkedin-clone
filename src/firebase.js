import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn0zzAEM9tRvgyczuPpYnYQSBv09FYwq0",
    authDomain: "linkedin-clone-ac2d3.firebaseapp.com",
    projectId: "linkedin-clone-ac2d3",
    storageBucket: "linkedin-clone-ac2d3.appspot.com",
    messagingSenderId: "1012095231638",
    appId: "1:1012095231638:web:3cb0b6def7df92d449c4b7",
    measurementId: "G-YJR2QZV2TR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage =  firebase.storage();

  export {auth, provider,storage};
  export default db;
