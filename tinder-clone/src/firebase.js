import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCheVKktlWCZ5Ke1EOXJ7dFq3rdOsI8Kjo",
    authDomain: "tinder-clone-fdff3.firebaseapp.com",
    databaseURL: "https://tinder-clone-fdff3.firebaseio.com",
    projectId: "tinder-clone-fdff3",
    storageBucket: "tinder-clone-fdff3.appspot.com",
    messagingSenderId: "865852434074",
    appId: "1:865852434074:web:898cf7078ecf28c27c6123",
    measurementId: "G-VME28SKE2S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;

