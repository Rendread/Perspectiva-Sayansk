import React from 'react';
import Header from '../../components/header/header';
import Slider from '../../components/Slider/slider';
import Footer from '../../components/footer/footer';
import IntroContacts from '../../components/intro/introContacts';
import BrowistsPage from '../../components/Beauty/Browists';

function Browists() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <BrowistsPage />
      <IntroContacts />
      <Footer />
    </React.Fragment>
  );
}

export default Browists;
