// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7vmQSeauJouaa7VISZBQulK9YRavSSgE",
  authDomain: "cursos-alfaweb-7f121.firebaseapp.com",
  projectId: "cursos-alfaweb-7f121",
  storageBucket: "cursos-alfaweb-7f121.appspot.com",
  messagingSenderId: "14946765459",
  appId: "1:14946765459:web:4f75745c2328149292db66",
  measurementId: "G-KZKW0X59RH",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().setting({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
