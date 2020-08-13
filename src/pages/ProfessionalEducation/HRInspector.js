import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import HRInspectorContent from '../../components/aboutAddProffEducation/HrInspector/HRInspector';

function HRInspector() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <HRInspectorContent />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default HRInspector;
