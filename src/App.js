import React from 'react';
import '../src/style.css';
import { Router, Route, Switch, Redirect } from 'react-router';
import Header from './components/header/header';
import AppPage from './components/intro/Intro';
import IntroPage from './components/intro/Intro';
import Slider from './components/Slider/slider';
import Footer from './components/footer/footer';
import MainPage from './pages/MainPage';
import Documents from './pages/documents';
import AboutEGE from './pages/aboutEGE';

import Error404 from './pages/404';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/documents" component={Documents} />
      <Route exact path="/AboutEGE" component={AboutEGE} />
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  );
}
//<Route exact path="/404" component={Error404} />
export default App;
