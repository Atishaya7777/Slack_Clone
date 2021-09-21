import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For the love of God, please put compat after firebase/ in order to make this little piece of  shit work

const firebaseConfig = {
  apiKey: "AIzaSyDcScFmwAFBsfDfSwLSUj1y0OOeqXWApKg",
  authDomain: "slack-clone-yt-5d5e2.firebaseapp.com",
  projectId: "slack-clone-yt-5d5e2",
  storageBucket: "slack-clone-yt-5d5e2.appspot.com",
  messagingSenderId: "275177250471",
  appId: "1:275177250471:web:859352a0bb53b8ec640582"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };