import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For the love of God, please put compat after firebase/ in order to make this little piece of  shit work

const firebaseConfig = {
  apiKey: // insert your apiKey here,
  authDomain: //insert your authDomain here,
  projectId: // insert your projectID here,
  storageBucket: // insert your storage bucket here,
  messagingSenderId: // insert your messaging SenderId here,
  appId: // insert your appId here.
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
