import React from 'react';
import '../aboutEGEPages.css';
import SchoolEducationImage from '../../../images/OGEImageDev.png';

function Class11() {
  return (
    <div className="AboutEGEPagesContent">
      <div className="AboutEGEPagesContentTextContainer">
        <img src={SchoolEducationImage} alt="" className="AboutEGEPagesContentImage"></img>
        <div className="AboutEGEPagesContentContainerInImage">
          <h1>11 класс – «К ЕГЭ за один год»</h1>
          <p className="AboutEGEPagesContentContainerInImageTextUnderHead">
            Очень важно не просто получить положительную отметку для получения аттестата о среднем
            образовании, а набрать максимально возможный балл для поступления в выбранное учебное
            заведение.
          </p>
          <p style={{ marginTop: '30px' }}>Курсы «К ЕГЭ за один год» с 11-го класса – это:</p>
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
              Программа рассчитана на 1 учебный год – 7 месяцев (48 ак.часов по каждой дисциплине)
            </p>
            <p>
              <b>2020-2021 г.г. – с 1 октября 2019 по 30 апреля 2020</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class11;
