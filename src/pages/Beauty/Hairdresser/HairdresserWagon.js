import React from 'react';
import Header from '../../../components/header/header';
import Slider from '../../../components/Slider/slider';
import Footer from '../../../components/footer/footer';
import IntroContacts from '../../../components/intro/introContacts';
import HairdressWagonPage from '../../../components/Beauty/Hairdresser/HairdresserWagon';

function HairdressWagon() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <HairdressWagonPage />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default HairdressWagon;
