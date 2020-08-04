import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/analytics';

import IntroPage from './components/intro/Intro';
import Slider from './components/Slider/slider';
import Footer from './components/footer/footer';
import App from './App';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Documents from './pages/documents';
import Error404 from './pages/404';
import { Circle2 } from 'react-preloaders';

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

const email = 'rendreadcode@gmail.com';
const password = 'Renegade322';

var db = firebase.firestore();
var analytics = firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    console.log('Емайл ' + user.email);
  } else {
    console.log('Емайл пустой ');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
//<Slider />
//<IntroPage />
//<Circle2 time={0}></Circle2>
