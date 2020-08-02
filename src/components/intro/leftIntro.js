import React, { useState } from 'react';
import './leftintro.css';
import Button from '@material-ui/core/Button';

function LeftIntro() {
  const [openEGE, setOpenEGE] = React.useState(true);
  function handleClickEGE() {
    openEGE ? setOpenEGE(false) : setOpenEGE(true);
  }

  const [openProfessionalEducation, setOpenProfessionalEducation] = React.useState(true);
  function handleClickProfessionalEducation() {
    openProfessionalEducation
      ? setOpenProfessionalEducation(false)
      : setOpenProfessionalEducation(true);
  }
  const [serviseOpen, setserviseOpen] = React.useState(true);
  function handleClickserviseOpen() {
    serviseOpen ? setserviseOpen(false) : setserviseOpen(true);
  }

  return (
    <div>
      <div className="HeaderCourses">
        <h1>Наши курсы</h1>
      </div>
      <div className="AboutCourse">
        <div>
          <div className="Courses">
            <Button onClick={handleClickserviseOpen} className="ButtonCourse">
              <b>Курсы ногтевого сервиса и депиляции</b>
            </Button>
            <div className="HiddenCourse" hidden={serviseOpen ? true : false}>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
              <div>
                <a href="#Chimestry">Шугаринг</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Courses">
            <Button onClick={handleClickProfessionalEducation} className="ButtonCourse">
              <b>Курсы дополнительного профессионального образования</b>
            </Button>
            <div className="HiddenCourse" hidden={openProfessionalEducation ? true : false}>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
              <div>
                <a href="#Chimestry">Бухгалтер</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Courses">
            <Button onClick={handleClickEGE} className="ButtonCourse">
              <b>Подготовка к ОГЭ/ЕГЭ</b>
            </Button>
            <div className="HiddenCourse" hidden={openEGE ? true : false}>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
              <div>
                <a href="#Chimestry">Химия</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftIntro;
