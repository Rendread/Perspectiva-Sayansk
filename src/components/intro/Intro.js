import React from 'react';
import './intro.css';
import LeftIntro from './leftIntro';
import Button from '@material-ui/core/Button';
import Education from '../../icons/education.jpg';
import ProfEducation from '../../icons/AddProfEducation.svg';
import beautyIntro from '../../icons/beautyIntro.svg';
import homeworkIntro from '../../icons/homeworkIntro.svg';
import ElisabethFont from '../../fonts/elisabeth.ttf';
import IntroDirection from './IntroDirections';
import IntroAboutCenter from './introAboutCenter';
import IntroContacts from './introContacts';

function Intro() {
  return (
    <div id="Wrapper">
      <IntroDirection></IntroDirection>
      <IntroAboutCenter></IntroAboutCenter>
      <IntroContacts></IntroContacts>
    </div>
  );
}

export default Intro;
