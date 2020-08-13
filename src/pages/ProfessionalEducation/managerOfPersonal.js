import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import ManagerOfPersonalContent from '../../components/aboutAddProffEducation/managerOfPersonal/managerOfPersonal';

function ManagerOfPersonalWrapper() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <ManagerOfPersonalContent />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default ManagerOfPersonalWrapper;
