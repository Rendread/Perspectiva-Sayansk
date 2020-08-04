import React from 'react';
import '../style.css';
import Header from '../components/header/header';
import AppPage from '../components/intro/Intro';
import IntroPage from '../components/intro/Intro';
import Slider from '../components/Slider/slider';
import Footer from '../components/footer/footer';

function MainPage() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <IntroPage />
      <Footer />
    </React.Fragment>
  );
}

export default MainPage;
