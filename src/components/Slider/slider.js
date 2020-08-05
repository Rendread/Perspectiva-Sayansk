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
import FirstSlide from '../../images/Slide1.png';
import AdditionalProfessionalEducationSlide from '../../images/AdditionalProfessionalEducationSlide.jpg';
import AboutBeautyCourse from '../../images/AboutBeautyCourse.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CheckmarkSlider from '../../icons/checkmarkSlider.svg';
import SliderIcon from '../../icons/SliderIcon.svg';
import './slider.css';
import { Icon } from '@material-ui/core';

class Slider extends React.Component {
  render() {
    return (
      <div className="ImageSlider" id="tImageSlider">
        <Carousel
          emulateTouch
          swipeable
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          interval={5000}
          infiniteLoop
          className="Carousel">
          <a style={{ cursor: 'auto' }} href="/AboutAdditionalProffessionalEducation">
            <div>
              <div className="SliderHeading">
                <div className="SliderHeadingEGEMain">
                  <h1>Дополнительное профессиональное образование</h1>
                  <div className="SliderHeadingEGEMainText">
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 23 занятия</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 6 раз в неделю</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 60 минут</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a href="/AboutEGE">
                    <button className="ButtonSlider">Подробнее</button>
                  </a>
                </div>
              </div>
              <div className="SliderSlideBackground">
                <img
                  className="SliderSlide"
                  alt=""
                  src={AdditionalProfessionalEducationSlide}></img>
              </div>
            </div>
          </a>
          <a style={{ cursor: 'auto' }} href="/AboutAdditionalProffessionalEducation">
            <div>
              <div className="SliderHeading">
                <div className="SliderHeadingEGEMain">
                  <h1>Курсы красоты</h1>
                  <div className="SliderHeadingEGEMainText">
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 23 занятия</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 6 раз в неделю</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 60 минут</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a href="/AboutEGE">
                    <button className="ButtonSlider">Подробнее</button>
                  </a>
                </div>
              </div>
              <div className="SliderSlideBackground">
                <img className="SliderSlide" alt="" src={AboutBeautyCourse}></img>
              </div>
            </div>
          </a>
          <a style={{ cursor: 'auto' }} href="/AboutEGE">
            <div>
              <div className="SliderHeading">
                <div className="SliderHeadingEGEMain">
                  <h1>Подготовка к ЕГЭ и ОГЭ</h1>
                  <div className="SliderHeadingEGEMainText">
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 23 занятия</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 6 раз в неделю</p>
                    </div>
                    <div>
                      <img
                        className="SliderHeadingEGEMainTextImg"
                        style={{ width: '20px' }}
                        src={SliderIcon}></img>
                      <p> 60 минут</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a href="/AboutEGE">
                    <button className="ButtonSlider">Подробнее</button>
                  </a>
                </div>
              </div>
              <div className="SliderSlideBackgroundSecond">
                <img className="SliderSlideSecond" alt="" src={Slide9}></img>
              </div>
            </div>
          </a>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
