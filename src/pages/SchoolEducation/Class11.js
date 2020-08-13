import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import Class11Content from '../../components/aboutEGE/Class11/Class11';
import EGEPrice from '../../components/aboutEGE/EGEPrice';
import EGEModeCourses from '../../components/aboutEGE/EGEModeCourses';

function HRInspector() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Class11Content />
      <EGEModeCourses />
      <EGEPrice />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default HRInspector;
