import React from 'react';

import BrowistImage1 from '../../images/Browist1.png';
import BrowistImage2 from '../../images/Browist2.png';

function Browists() {
  return (
    <div className="HairdresserWrapper">
      <div className="HairdresserContainer">
        <h1>Курсы лешмейкеров и бровистов </h1>
        <div className="HairdresserContainerNavigation">
          <div className="HairdresserContainerNavigationSecondRow">
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={BrowistImage1}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Наращивание ресниц.</p>{' '}
                <p>Классика</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={BrowistImage2}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">
                  МАСТЕР-БРОВИСТ. Архитектурноe{' '}
                </p>
                <p> моделирование бровей. Биотатуаж хной и </p>
                <p>окрашивание краской.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browists;
