import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import ManagerOfAccountantContent from '../../components/aboutAddProffEducation/Accountant/Accountant';

function ManagerOfAccountant() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <ManagerOfAccountantContent />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default ManagerOfAccountant;
