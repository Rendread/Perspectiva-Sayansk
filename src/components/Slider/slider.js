import SimpleImageSlider from 'react-simple-image-slider';
import React from 'react';
import Slide from '../../icons/lisa.jpg';
import Slide1 from '../../icons/slide1.jpg';
import Slide2 from '../../icons/slide2.jpg';
import Slide3 from '../../icons/slide3.jpg';
import Slide4 from '../../icons/slide4.jpg';
import Slide5 from '../../icons/slide5.jpg';
import Slide6 from '../../icons/slide6.jpg';
import Slide7 from '../../icons/slide7.jpg';
import Slide8 from '../../icons/slide8.jpg';
import Slide9 from '../../icons/slide9.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slider.css';

class Slider extends React.Component {
  render() {
    const images = [
      { url: Slide5 },
      { url: Slide1 },
      { url: Slide2 },
      { url: Slide3 },
      { url: Slide4 },
      { url: Slide },
      { url: Slide6 },
      { url: Slide7 },
      { url: Slide8 },
      { url: Slide9 },
    ];
    return (
      <div className="ImageSlider" id="tImageSlider">
        <Carousel
          emulateTouch
          swipeable
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          autoPlay={false}
          interval={5000}
          infiniteLoop
          className="Carousel">
          <div>
            <div className="SliderHeading">
              <div className="SliderHeadingEGEMain">
                <h1>Подготовка к ЕГЭ и ОГЭ</h1>
                <h3>23 занятия 6 раз в неделю по 60 минут</h3>
              </div>

              <div>
                <button className="ButtonSlider">Подробнее</button>
              </div>
            </div>
            <img className="SliderSlide" alt="" src={Slide9}></img>
          </div>
          <div>
            <img alt="" src={Slide6} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
