import React from 'react';
import FirstImageHairdresser from '../../images/FirstImageHairdresser.png';
import HairdresserMan2 from '../../images/HairdresserMan2.png';
import Hairdress3 from '../../images/Hairdress3.png';
import Hairdress4 from '../../images/Hairdress4.png';
import Hairdress5 from '../../images/Hairdress5.png';

function Hairdresser() {
  return (
    <div className="HairdresserWrapper">
      <div className="HairdresserContainer">
        <h1>Курсы парикмахерского искусства</h1>
        <div className="HairdresserContainerNavigation">
          <div className="HairdresserContainerNavigationFirstRow">
            <a href="/CourseOfBeauty/Hairdresser/hairdresserwagon#TNextPage">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={FirstImageHairdresser}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Парикмахер-универсал</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={HairdresserMan2}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Парикмахер. Мужские стрижки</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Hairdress3}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Парикмахер. Женские стрижки</p>
              </div>
            </a>
          </div>

          <div className="HairdresserContainerNavigationSecondRow">
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Hairdress4}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">
                  Колористика и окрашивание волос
                </p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Hairdress5}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">
                  Домашний парикмахер. Мужские стрижки
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hairdresser;
