import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDXZWCEvhAla1toTGbtIucebgbcsJqvr98',
  authDomain: 'perspectiva-9c58b.firebaseapp.com',
  databaseURL: 'https://perspectiva-9c58b.firebaseio.com',
  projectId: 'perspectiva-9c58b',
  storageBucket: 'perspectiva-9c58b.appspot.com',
  messagingSenderId: '903356181119',
  appId: '1:903356181119:web:fc1a328e434ee944ce6d4a',
  measurementId: 'G-W82HYFTJDF',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  promt: 'select_account',
});

function signInWithGoogle() {
  return (
    provider.setCustomParameters({
      promt: 'select_account',
    }),
    auth.signInWithPopup(provider)
  );
}

export default signInWithGoogle;
