import React from 'react';
import '../BeautyCoursesMore.css';
import HairdresserWagon from '../../../images/HairdresserWagon.png';

function HairdressWagon() {
  return (
    <div className="BeautyCoursesMoreWrapper">
      <div className="BeautyCoursesMoreMainContainer">
        <h1>Парикмахер-универсал</h1>
        <div className="BeautyCoursesMoreContainer">
          <div className="BeautyCoursesMoreImageContainer">
            <img src={HairdresserWagon} alt="" />
            <div className="ProfEducationPriceGrid">
              <p>Стоимость курса:</p>
              <p>21 000 руб (по 7000 руб в месяц)</p>
              <p>Длительность курса:</p>
              <p>3,5 месяца (372 ак. часа)</p>
              <p>Начало занятий:</p>
              <p>по набору группы</p>
              <p>Режим обучения:</p>
              <p>2</p>
              <p>Форма обучения:</p>
              <p>очная/заочная/дистанционная</p>
            </div>
            <p style={{ marginTop: '41px' }}>
              Инструменты, материалы и модели для практики предоставляются{' '}
            </p>
            <p> учебным центром. </p>
            <p>Обучение проводится небольшими группами до 6 человек. </p>
            <p> По окончании курса выдается удостоверение.</p>
          </div>

          <div className="BeautyCoursesMoreTextContainer">
            <h1>Приглашаем получить востребованную и модную профессию «Парикмахер-Универсал»!</h1>
            <p style={{ marginTop: '18px' }}>
              Именно таких мастеров ищет большинство салонов. Специалист разбирается в мужских,
              женских, а также детских стрижках, знает все о новейших тенденциях в мире
              парикмахерского искусства, с легкостью создаст образ путем подбора прически, умеет
              творить настоящие шедевры из волос клиентов.
            </p>
            <p style={{ marginTop: '10px' }}>
              Программа подходит для желающих освоить все тонкости профессии парикмахера широкого
              профиля, научиться выяснять пожелания и стричь с учетом предпочтений клиентов. Знания
              и навыки, полученные в ходе занятий, позволят вам начать успешно работать в салоне
              красоты сразу после окончания курсов.
            </p>
            <h1 style={{ marginTop: '20px' }}>Учебная программа курса "Парикмахер-универсал"</h1>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>1 </p>
              <p style={{ marginLeft: '10px' }}> Парикмахерские услуги. Общие понятия. Виды.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>2 </p>
              <p style={{ marginLeft: '10px' }}> Инструменты парикмахера</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>3 </p>
              <p style={{ marginLeft: '10px' }}> Мытье и массаж головы.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>4 </p>
              <p style={{ marginLeft: '10px' }}> Стрижка волос.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>5 </p>
              <p style={{ marginLeft: '10px' }}>
                {' '}
                Особенности выполнения женских, мужских и детских стрижек.
              </p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>6 </p>
              <p style={{ marginLeft: '10px' }}> Окраска волос</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>7 </p>
              <p style={{ marginLeft: '10px' }}> Колористика</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>8 </p>
              <p style={{ marginLeft: '10px' }}> Химическая завивка волос.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>9 </p>
              <p style={{ marginLeft: '10px' }}> Моделирование.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>10 </p>
              <p style={{ marginLeft: '10px' }}> Технология выполнения современных стрижек.</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>11 </p>
              <p style={{ marginLeft: '10px' }}> Прически и укладки</p>
            </div>
            <div className="BeautyCoursesMoreEducationProgramm">
              <p>12 </p>
              <p style={{ marginLeft: '10px' }}> Психология и этика общения с клиентом</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HairdressWagon;
