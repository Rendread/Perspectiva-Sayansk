import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import Class5to8Content from '../../components/aboutEGE/Class5to8/Class5to8';
import EGEPrice from '../../components/aboutEGE/EGEPrice';
import EGEModeCourses from '../../components/aboutEGE/EGEModeCourses';

function HRInspector() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Class5to8Content />
      <EGEModeCourses />
      <EGEPrice />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default HRInspector;
