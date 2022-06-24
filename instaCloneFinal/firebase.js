import firebaseConfig from './config';


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app"

const firebaseApp = initializeApp({ firebaseConfig});

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});

export default firebaseApp;