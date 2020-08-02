import SimpleImageSlider from 'react-simple-image-slider';
import React from 'react';
import Slide from '../../icons/lisa.jpg';
import Slide1 from '../../icons/slide1.jpg';
import Slide2 from '../../icons/slide2.jpg';
import Slide3 from '../../icons/slide3.jpg';
import Slide4 from '../../icons/slide4.jpg';
import Slide5 from '../../icons/slide5.jpg';
import { ExpansionPanel } from '@material-ui/core';

import './slider.css';

class Slider extends React.Component {
  onStartSlide = (idx, length) => {
    console.log(`[App onStartSlide] ${idx}/${length}`);
    this.setState({ slideIndexText: `${1} / ${2}` });
  };
  render() {
    const images = [
      { url: Slide5 },
      { url: Slide1 },
      { url: Slide2 },
      { url: Slide3 },
      { url: Slide4 },
      { url: Slide },
    ];

    return (
      <div className="ImageSlider">
        <div className="ImageSliderSec">
          <SimpleImageSlider
            showBullets={false}
            className="SimpleImageSlider"
            width="100%"
            height={500}
            images={images}
            slideDuration={0.5}
            onStartSlide={this.onStartSlide}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
