import React from 'react';

import SchoolEducationImage from '../../images/OGEImageDev.png';

function Browists() {
  return (
    <div className="AboutEGEPagesContent">
      <div className="AboutEGEPagesContentTextContainer">
        <img src={SchoolEducationImage} alt="" className="AboutEGEPagesContentImage"></img>
        <div className="AboutEGEPagesContentContainerInImage">
          <h1>C 5 по 8 класс – «Хорошист»</h1>
          <p className="AboutEGEPagesContentContainerInImageTextUnderHead">
            Подготовка к ОГЭ с 8-го класса включает в себя поэтапную подготовку к ОГЭ с углубленным
            изучением предметов для формирования фундаментальной базы знаний.
          </p>
          <p style={{ marginTop: '30px' }}>Курсы «К ОГЭ за два года» с 8-го класса – это:</p>
          <div
            style={{ marginTop: '28px', marginRight: '40%', marginLeft: '1%' }}
            className="AboutEGEPagesContentContainerEllipse">
            <div className="AboutEGEPagesContentEllipse"></div>
            <p1 style={{ fontSize: '20px' }} className="AboutEGEPagesContentTextContainerEllipseP1">
              начальное тестирование для определения уровня подготовки учащегося и «проблемных зон»;
            </p1>
          </div>
          <div
            style={{ marginTop: '28px', marginRight: '40%', marginLeft: '1%' }}
            className="AboutEGEPagesContentContainerEllipse">
            <div className="AboutEGEPagesContentEllipse"></div>
            <p1 style={{ fontSize: '20px' }} className="AboutEGEPagesContentTextContainerEllipseP1">
              специально подобранные материалы для обучения;
            </p1>
          </div>
          <div
            style={{ marginTop: '28px', marginRight: '40%', marginLeft: '1%' }}
            className="AboutEGEPagesContentContainerEllipse">
            <div className="AboutEGEPagesContentEllipse"></div>
            <p1 style={{ fontSize: '20px' }} className="AboutEGEPagesContentTextContainerEllipseP1">
              персональные консультации для каждого слушателя с разработкой необходимых
              рекомендаций;
            </p1>
          </div>
          <div
            style={{ marginTop: '28px', marginRight: '40%', marginLeft: '1%' }}
            className="AboutEGEPagesContentContainerEllipse">
            <div className="AboutEGEPagesContentEllipse"></div>
            <p1 style={{ fontSize: '20px' }} className="AboutEGEPagesContentTextContainerEllipseP1">
              промежуточные и итоговые тестирования;
            </p1>
          </div>
          <div
            style={{ marginTop: '28px', marginRight: '40%', marginLeft: '1%' }}
            className="AboutEGEPagesContentContainerEllipse">
            <div className="AboutEGEPagesContentEllipse"></div>
            <p1 style={{ fontSize: '20px' }} className="AboutEGEPagesContentTextContainerEllipseP1">
              повышение успеваемости по предметам;- постепенная подготовка к ОГЭ
            </p1>
          </div>
          <div className="AboutEGEPagesContentContainerFooter">
            <p>
              Программа рассчитана на 2 учебных года по 7 месяцев (каждый год 48 ак.часов по каждой
              дисциплине)
            </p>
            <p>
              <b>2019-2020 г.г. – с 1 октября 2019 по 30 апреля 2020</b>
            </p>
            <p>
              <b>2020-2021 г.г. – с 1 октября 2020 по 30 апреля 2021</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browists;
