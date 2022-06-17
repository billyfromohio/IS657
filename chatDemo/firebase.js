import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC7XW9lEa-5KxEIAtugLchepa07vECUnXs",
  authDomain: "signalapp-2f7fc.firebaseapp.com",
  projectId: "signalapp-2f7fc",
  storageBucket: "signalapp-2f7fc.appspot.com",
  messagingSenderId: "702507879021",
  appId: "1:702507879021:web:8a15486437679445640d64"
};

let firebaseApp;

if (getApps().length === 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

export default firebaseApp;
