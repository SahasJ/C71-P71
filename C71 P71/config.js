import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC3lntKBXrrrzoihB0i0eoxi5pFhbA-MNw",
    authDomain: "c71-p71.firebaseapp.com",
    projectId: "c71-p71",
    storageBucket: "c71-p71.appspot.com",
    messagingSenderId: "505075293720",
    appId: "1:505075293720:web:bef8b72a93390b75a5ed6d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
