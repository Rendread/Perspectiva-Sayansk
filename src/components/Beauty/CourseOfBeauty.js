import React from 'react';
import './BeautyStyle.css';
import HairdresserImage from '../../images/HairdresserImage.png';
import ManicureImage from '../../images/ManicureImage.png';
import BrowistsImage from '../../images/BrowistsImage.png';

function AboutEGE() {
  return (
    <div id="CourseOfBeautyWrapper">
      <div className="CourseOfBeautyContainer">
        <div className="CourseOfBeautyCards">
          <div className="CourseOfBeautyCardsContainer">
            <a href="/CourseOfBeauty/Hairdresser#TNextPage">
              <div className="CourseOfBeautyCardsText">
                <p>Курсы парикмахерского искусства</p>
                <p>5 специализаций</p>
              </div>
              <div className="CourseOfBeautyCardsImage">
                <img style={{ height: '250px', width: '100%' }} src={HairdresserImage}></img>
              </div>
            </a>
          </div>
        </div>
        <div className="CourseOfBeautyCards">
          <div className="CourseOfBeautyCardsContainer">
            <a href="/CourseOfBeauty/Manicure#TNextPage">
              <div className="CourseOfBeautyCardsText">
                <p>Курсы ногтевого сервиса и депиляции </p>
                <p>8 специализаций</p>
              </div>
              <div className="CourseOfBeautyCardsImage">
                <img style={{ height: '250px', width: '100%' }} src={ManicureImage}></img>
              </div>
            </a>
          </div>
        </div>
        <div className="CourseOfBeautyCards">
          <div className="CourseOfBeautyCardsContainer">
            <a href="/CourseOfBeauty/Browists#TNextPage">
              <div className="CourseOfBeautyCardsText">
                <p>Курсы лешмейкеров и бровистов</p>
                <p>2 специализаций</p>
              </div>
              <div className="CourseOfBeautyCardsImage">
                <img style={{ height: '250px', width: '100%' }} src={BrowistsImage}></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEGE;
