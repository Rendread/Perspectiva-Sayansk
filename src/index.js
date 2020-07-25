import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Lisa from './icons/lisa.jpg';

const FirebaseConfig = {
  apiKey: 'AIzaSyDXZWCEvhAla1toTGbtIucebgbcsJqvr98',
  authDomain: 'perspectiva-9c58b.firebaseapp.com',
  databaseURL: 'https://perspectiva-9c58b.firebaseio.com',
  projectId: 'perspectiva-9c58b',
  storageBucket: 'perspectiva-9c58b.appspot.com',
  messagingSenderId: '903356181119',
  appId: '1:903356181119:web:fc1a328e434ee944ce6d4a',
  measurementId: 'G-W82HYFTJDF',
};
firebase.initializeApp(FirebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
