import React from 'react';
import './aboutEGE.css';
import calculatorModeCourses from '../../icons/calculatorModeCourses.svg';
import bookModeCourses from '../../icons/bookModeCourses.svg';
import atomModeCourses from '../../icons/atomModeCourses.svg';
import chemistryModeCourses from '../../icons/chemistryModeCourses.svg';
import studentModeCourses from '../../icons/studentModeCourses.svg';
import researchModeCourses from '../../icons/researchModeCourses.svg';
import englandModeCourses from '../../icons/englandModeCourses.svg';
import monitorModeCourses from '../../icons/monitorModeCourses.svg';
import historyModeCourses from '../../icons/historyModeCourses.svg';
import grammarModeCourses from '../../icons/grammarModeCourses.svg';
import AboutEGEFormEducation from '../../images/AboutEGEFormEducation.png';

function AboutEGE() {
  return (
    <div id="AboutEGEWrapper">
      <div className="EGEAboutCourses">
        <div className="EGEAboutCoursesContainer">
          <div className="EGEAboutCoursesContainerText">
            <h1>О курсе</h1>
            <p className="EGEAboutCoursesContainerTextFirstP">
              Целью нашего курса является подготовка учеников к успешной сдачи ЕГЭ и ОГЭ, помощь в
              преодолении всех испытаний при сдачи экзаменов. Мы поможем получить высокий балл ЕГЭ и
              ОГЭ для дальнейшего поступления в вуз.
            </p>
            <p>
              В нашем центре работают преподаватели с высшей категорией и большим опытом работы.
              Занятия проходят в небольших группах по 5 - 6 человек, это позволяет уделять максимум
              внимания каждому ученику.
            </p>
          </div>
        </div>
      </div>
      <div className="EGEFormEducation" style={{ height: '1200px' }}>
        <img
          alt=""
          src={AboutEGEFormEducation}
          style={{ width: '100%', height: '1200px', position: 'absolute', zIndex: -1 }}></img>
        <div className="EGEFormEducationContainerText">
          <h1>Формы обучения</h1>
        </div>
        <div className="EGEFormEducationContainerGrid">
          <div className="EGEFormEducationContainerCard">
            <h1>11 класс – «ЕГЭ классический»</h1>
            <div className="EGEFormEducationLine"></div>
            <p>
              Наш центр предлагает своим ученикам курсы подготовки к ЕГЭ в 11 классе по всем
              предметам, что открывает возможности для дальнейшего продолжения образования.
            </p>
            <p>Программа рассчитана на 1 учебный год - 7 месяцев</p>
            <a href="/SchoolEducation/Class11#TNextPage">
              <p className="EGEFormEducationContainerCardP1">Узнать больше</p>
            </a>
          </div>
          <div className="EGEFormEducationContainerCardLeft EGEFormEducationContainerCard ">
            <h1>9 класс – «ОГЭ классический»</h1>
            <div className="EGEFormEducationLine"></div>
            <p>
              Наш центр предлагает своим ученикам курсы подготовки к ОГЭ в 9 классе по всем
              предметам, что открывает возможности для дальнейшего продолжения образования.
            </p>
            <p>Программа рассчитана на 1 учебный год - 7 месяцев</p>
            <a href="/SchoolEducation/Class9#TNextPage">
              <p className="EGEFormEducationContainerCardP1">Узнать больше</p>
            </a>
          </div>
          <div className="EGEFormEducationContainerCard">
            <h1>10 класс – «К ЕГЭ за два года»</h1>
            <div className="EGEFormEducationLine"></div>
            <p>
              Подготовка к ЕГЭ с 10-го класса позволяет не просто поэтапно и основательно
              подготовиться к ЕГЭ, но и создать прочную базу для дальнейшего обучения.
            </p>
            <p>Программа рассчитана на 2 учебных года по 7 месяцев</p>
            <a href="/SchoolEducation/Class10#TNextPage">
              <p className="EGEFormEducationContainerCardP1">Узнать больше</p>
            </a>
          </div>
          <div className="EGEFormEducationContainerCardLeft EGEFormEducationContainerCard">
            <h1>5-8 класс – «ХОРОШИСТ»</h1>
            <div className="EGEFormEducationLine"></div>
            <p>
              Подготовка к ОГЭ с 8-го класса включает в себя поэтапную подготовку к ОГЭ с
              углубленным изучением предметов для формирования фундаментальной базы знаний.
            </p>
            <p>Программа рассчитана на 2 учебных года по 7 месяцев</p>
            <a href="/SchoolEducation/Class5to8#TNextPage">
              <p className="EGEFormEducationContainerCardP1">Узнать больше</p>
            </a>
          </div>
        </div>
      </div>
      <div className="EGEModeCourses">
        <div className="EGEModeCoursesContainer">
          <h1>Режим обучения</h1>
          <div className="EGEModeCoursesText">
            <p>Занятия проводятся 1 раз в неделю по каждой дисциплине по 2 академических часа</p>
          </div>
          <div className="EGEModeCoursesIcons">
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={calculatorModeCourses}></img>
              <p>Математика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={grammarModeCourses}></img>
              <p>Русский язык</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={bookModeCourses}></img>
              <p>Литература</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={atomModeCourses}></img>
              <p>Физика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={chemistryModeCourses}></img>
              <p>Химия</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={studentModeCourses}></img>
              <p>Обществознание</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={researchModeCourses}></img>
              <p>Биология</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={englandModeCourses}></img>
              <p>Английский язык</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={monitorModeCourses}></img>
              <p>Информатика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img alt="" style={{ height: '80px' }} src={historyModeCourses}></img>
              <p>История</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEGE;
