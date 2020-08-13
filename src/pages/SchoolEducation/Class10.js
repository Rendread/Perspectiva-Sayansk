import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import Class10Content from '../../components/aboutEGE/Class10/Class10';
import EGEPrice from '../../components/aboutEGE/EGEPrice';
import EGEModeCourses from '../../components/aboutEGE/EGEModeCourses';

function HRInspector() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Class10Content />
      <EGEModeCourses />
      <EGEPrice />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default HRInspector;
