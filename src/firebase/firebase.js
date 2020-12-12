import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDJCP5RYDd1obUf11iOSt-2w0HvDLHWB-U',
  authDomain: 'coronet-db.firebaseapp.com',
  databaseURL: 'https://coronet-db.firebaseio.com',
  projectId: 'coronet-db',
  storageBucket: 'coronet-db.appspot.com',
  messagingSenderId: '606295833630',
  appId: '1:606295833630:web:4248d8e0d78bd49ced420f',
  measurementId: 'G-LS8QZZW8FX',
};

console.log('retest' + process.env.REACT_APP_CLIENT_ID);

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const createUserProfileDocument = async (user, additionalData) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export {
  auth,
  firestore,
  googleProvider,
  signInWithGoogle,
  createUserProfileDocument,
  firebase as default,
};
