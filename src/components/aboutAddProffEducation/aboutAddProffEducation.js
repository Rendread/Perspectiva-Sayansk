import React from 'react';
import './aboutAddProffEducation.css';
import TrainingIntro from '../../icons/trainingIntro.svg';
import beautyIntro from '../../icons/beautyIntro.svg';
import homeworkIntro from '../../icons/homeworkIntro.svg';

function AboutAddProffEducation() {
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
                  <a href="/AboutEGE">
                    <p>Подробнее</p>
                  </a>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Менеджер по персоналу</p>
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
                  <a>
                    <p>Подробнее</p>
                  </a>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Инспектор по кадрам</p>
                <p2>Дополнительное Профессиональное Образование</p2>
              </div>
            </div>
            <div></div>
            <div className="AboutCenterDirections">
              <img src={beautyIntro} style={{ height: 100, marginTop: '20px' }} />
              <div className="AboutCenterDirectionsButtonDiv">
                <button className="AboutCenterDirectionsButton">
                  <a>
                    <p>Подробнее</p>
                  </a>
                </button>
              </div>
              <div className="AboutCenterDirectionsThing">
                <p>Бухгалтерский учет на предприятии</p>
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

export default AboutAddProffEducation;
