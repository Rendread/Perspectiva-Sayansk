import React from 'react';
import Manicure1 from '../../images/Manicure1.png';
import Manicure2 from '../../images/Manicure2.png';
import Manicure3 from '../../images/Manicure3.png';
import Manicure4 from '../../images/Manicure4.png';
import Manicure5 from '../../images/Manicure5.png';
import Manicure6 from '../../images/Manicure6.png';
import Manicure7 from '../../images/Manicure7.png';
import Manicure8 from '../../images/Manicure8.png';

function Manicure() {
  return (
    <div className="HairdresserWrapper">
      <div className="HairdresserContainer">
        <h1>Курсы ногтевого сервиса и депиляции</h1>
        <div className="HairdresserContainerNavigation">
          <div className="HairdresserContainerNavigationFirstRow">
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure1}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Шугаринг. </p>{' '}
                <p>Депиляция сахарной пастой</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure2}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Педикюр. </p>{' '}
                <p>Технология работы с гель-лаком. </p> <p>Дизайн гель-лаками</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure3}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Аппаратный маникюр. </p>{' '}
                <p>Укрепление и выравнивание </p> <p>ногтевой пластины полигелем</p>
              </div>
            </a>
          </div>
          <div className="HairdresserContainerNavigationFirstRow">
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure4}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Укрепление ногтей акрилом. </p>{' '}
                <p>Дизайн в наращивании</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure5}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Укрепление ногтей гелем.</p>{' '}
                <p>Дизайн в наращивании</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure6}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Аппаратный маникюр.</p>{' '}
                <p> Технология работы с гель-лаком. </p> <p>Дизайн гель-лаками</p>
              </div>
            </a>
          </div>
          <div className="HairdresserContainerNavigationSecondRow">
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure7}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">
                  Технология работы с гель-лаком.
                </p>{' '}
                <p> Дизайн гель-лаками</p>
              </div>
            </a>
            <a href="/">
              <div className="HairdresserContainerNavigationCards">
                <div className="HairdresserContainerCircle">
                  <img
                    src={Manicure8}
                    alt=""
                    style={{
                      borderRadius: '50%',
                      position: 'absolute',
                      height: '250px',
                      zIndex: 1,
                    }}></img>
                </div>
                <p className="HairdresserContainerNavigationFirstP">Аппаратный маникюр</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manicure;
