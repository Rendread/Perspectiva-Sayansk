import React, { Component, useRef, useEffect } from 'react';
import './introDirections.css';
import LeftIntro from './leftIntro';
import Button from '@material-ui/core/Button';
import Education from '../../icons/education.jpg';
import TrainingIntro from '../../icons/trainingIntro.svg';
import beautyIntro from '../../icons/beautyIntro.svg';
import homeworkIntro from '../../icons/homeworkIntro.svg';
import ElisabethFont from '../../fonts/elisabeth.ttf';

function IntroDirection() {
  return (
    <div>
      <div id="tAboutCourses"></div>
      <div id="Grid-Intro">
        <div className="MainIntro">
          <div className="AboutCenter" id="tDirections">
            <h3>Наши направления</h3>
          </div>
          <div className="AboutCenterP">
            <div></div>
            <div className="AboutCenterDirections">
              <img src={homeworkIntro} style={{ height: 100, marginTop: '20px' }} />
              <div className="AboutCenterDirectionsButtonDiv">
                <button className="AboutCenterDirectionsButton">
                  <p>Подробнее</p>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Подготовка к ОГЭ/ЕГЭ</p>
                <p2>
                  Наши курсы позволят не только преодолеть испытания при сдаче ОГЭ и ЕГЭ, но и
                  получить высокий балл.
                </p2>
              </div>
            </div>
            <div></div>
            <div className="AboutCenterDirections">
              <img src={TrainingIntro} style={{ height: 100, marginTop: '20px' }} />
              <div className="AboutCenterDirectionsButtonDiv">
                <button className="AboutCenterDirectionsButton">
                  <p>Подробнее</p>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Дополнительное Профессиональное Образование</p>
                <p2>Дополнительное Профессиональное Образование</p2>
              </div>
            </div>
            <div></div>
            <div className="AboutCenterDirections">
              <img src={beautyIntro} style={{ height: 100, marginTop: '20px' }} />
              <div className="AboutCenterDirectionsButtonDiv">
                <button className="AboutCenterDirectionsButton">
                  <p>Подробнее</p>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Курсы красоты</p>
                <p2>Курсы красоты</p2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroDirection;
