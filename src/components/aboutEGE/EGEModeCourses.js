import React from 'react';
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

function EGEModeCourses() {
  return (
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
  );
}

export default EGEModeCourses;
