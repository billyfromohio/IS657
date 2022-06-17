
import * as firebase from 'firebase/app';
import 'firebase/firstore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7XW9lEa-5KxEIAtugLchepa07vECUnXs",
  authDomain: "signalapp-2f7fc.firebaseapp.com",
  projectId: "signalapp-2f7fc",
  storageBucket: "signalapp-2f7fc.appspot.com",
  messagingSenderId: "702507879021",
  appId: "1:702507879021:web:8a15486437679445640d64"
};

let app;

if (firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }