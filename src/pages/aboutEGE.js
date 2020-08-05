import React from 'react';
import '../style.css';
import Header from '../components/header/header';
import AppPage from '../components/intro/Intro';
import IntroPage from '../components/intro/Intro';
import Slider from '../components/Slider/slider';
import Footer from '../components/footer/footer';
import AboutEGE from '../components/aboutEGE/aboutEGE';
import IntroContacts from '../components/intro/introContacts';

function AboutEGEPage() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <AboutEGE />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default AboutEGEPage;
