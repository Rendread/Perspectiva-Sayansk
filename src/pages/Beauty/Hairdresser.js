import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import HairdresserPage from '../../components/Beauty/Hairdresser';

function Hairdresser() {
  return (
    <React.Fragment>
      <Header />

      <HairdresserPage />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default Hairdresser;
