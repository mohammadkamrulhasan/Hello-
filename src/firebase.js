import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIa261GY3Z9n2-3PBwql8IChQVCBb0K48",
    authDomain: "hello-cc594.firebaseapp.com",
    projectId: "hello-cc594",
    storageBucket: "hello-cc594.appspot.com",
    messagingSenderId: "962754996046",
    appId: "1:962754996046:web:e7a9e78b1b777beba3201f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db}