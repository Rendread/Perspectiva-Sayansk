import React from 'react';
import '../style.css';
import Header from '../components/header/header';
import AppPage from '../components/intro/Intro';
import IntroPage from '../components/intro/Intro';
import Slider from '../components/Slider/slider';
import Footer from '../components/footer/footer';
import AboutAddProffEducation from '../components/aboutAddProffEducation/aboutAddProffEducation';

function AboutAdditionalProffessionalEducation() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <AboutAddProffEducation />
      <Footer />
    </React.Fragment>
  );
}

export default AboutAdditionalProffessionalEducation;
