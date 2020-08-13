import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import ManicurePage from '../../components/Beauty/Manicure';

function Manicure() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <ManicurePage />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default Manicure;
