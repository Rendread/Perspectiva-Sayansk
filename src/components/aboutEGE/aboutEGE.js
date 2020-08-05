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
              Занятия проходят в небольших группах по 5 - 6 человек, это позваляет уделять максимум
              внимания каждому ученику.
            </p>
          </div>
        </div>
      </div>
      <div className="EGEFormEducation">
        <div className="EGEFormEducationContainer">
          <h1>Формы обучения</h1>
          <div className="EGEFormEducationPreTextDivFirst">
            <div>
              <p className="EGEFormEducationPreText">8 класс – </p>
              <p className="EGEFormEducationPreTextBold">«К ОГЭ за два года»</p>
            </div>
          </div>
          <p className="EGEFormEducationText">
            Подготовка к ОГЭ с 8-го класса включает в себя поэтапную подготовку к ОГЭ с углубленным
            изучением предметов для формирования фундаментальной базы знаний.
          </p>
          <p className="EGEFormEducationText">Курсы «К ОГЭ за два года» с 8-го класса – это:</p>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              начальное тестирование для определения уровня подготовки учащегося и «проблемных зон»;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              специально подобранные материалы для обучения;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              персональные консультации для каждого слушателя с разработкой необходимых
              рекомендаций;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              промежуточные и итоговые тестирования;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              повышение успеваемости по предметам;- постепенная подготовка к ОГЭ;
            </p1>
          </div>
          <div className="EGEFormEducationPreTextDiv">
            <div>
              <p className="EGEFormEducationPreText">10 класс – </p>
              <p className="EGEFormEducationPreTextBold">«К ЕГЭ за два года»</p>
            </div>
          </div>
          <p className="EGEFormEducationText">
            Подготовка к ЕГЭ с 10-го класса позволяет не просто поэтапно и основательно
            подготовиться к ЕГЭ, но и создать прочную базу для дальнейшего обучения.
          </p>
          <p className="EGEFormEducationText">
            Основные цели подготовительных курсов для 10-го класса:
          </p>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              приведение школьных знаний в единую систему для актуализации и устранения имеющихся
              трудностей по предмету;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">
              повышение успеваемости и подготовка к итоговым контрольным работам за 10 класс;
            </p1>
          </div>
          <div className="EGEFormEducationTextContainerEllipse">
            <div className="EGEFormEducationEllipse"></div>
            <p1 className="egeformeducationtextcontainerellipseP1">поэтапная подготовка к ЕГЭ</p1>
          </div>
          <div className="EGEFormEducationPreTextDivFirst">
            <div>
              <p className="EGEFormEducationPreText">9 класс – </p>
              <p className="EGEFormEducationPreTextBold">«ОГЭ классический»</p>
            </div>
          </div>
          <p className="EGEFormEducationText">
            Для перехода в 10 класс или поступления в учреждение среднего профессионального
            образования необходимы положительные отметки по ОГЭ. Наш центр предлагает своим ученикам
            курсы подготовки к ОГЭ в 9 классе по всем предметам, что открывает возможности для
            дальнейшего продолжения образования.
          </p>
          <div className="EGEFormEducationPreTextDivFirst">
            <div>
              <p className="EGEFormEducationPreText">11 класс – </p>
              <p className="EGEFormEducationPreTextBold">«ЕГЭ классический»</p>
            </div>
          </div>
          <p className="EGEFormEducationText">
            Очень важно не просто получить положительную отметку для получения аттестата о среднем
            образовании, а набрать максимально возможный балл для поступления в выбранное учебное
            заведение.
          </p>
          <p className="EGEFormEducationText">
            В рамках подготовки ЕГЭ мы работаем на максимально положительный результат. Каждый
            слушатель тестируется для определения уровня знаний и для него составляются персональные
            рекомендации.
          </p>
          <p className="EGEFormEducationText">
            Курсы подготовки к ЕГЭ в 11 классе – это залог успешной сдачи ЕГЭ и поступления на
            бюджет в ВУЗ Вашей мечты!
          </p>
        </div>
      </div>
      <div className="EGEDurationCourses">
        <div className="EGEDurationCoursesContainer">
          <h1>Продолжительность курсов</h1>
          <div className="EGEDurationCoursesTimeContainer">
            <p>
              <b>«К ОГЭ за два года»</b> - для 8 классов
            </p>
            <p>
              <b>«К ЕГЭ за два года»</b> - для 10 классов
            </p>
          </div>
          <div className="EGEDurationCoursesUnderTimeContainerText">
            <p>
              Программа рассчитана на<b> 2 учебных года по 7 месяцев</b>
            </p>
            <p>(каждый год 48 ак.часов по каждой дисциплине)</p>
          </div>
          <div className="EGEDurationCoursesDattaOfClasses">
            <p>2019-2020 г.г. – с 1 октября 2019 по 30 апреля 2020</p>
            <p>2020-2021 г.г. – с 1 октября 2020 по 30 апреля 2021</p>
          </div>
          <div className="EGEDurationCoursesTimeContainer">
            <p>
              <b>«ОГЭ классический»</b> - для 9 классов
            </p>
            <p>
              <b>«ЕГЭ классический»</b> - для 11 классов
            </p>
          </div>
          <div className="EGEDurationCoursesUnderTimeContainerText">
            <p>
              Программа рассчитана на <b>1 учебный год – 7 месяцев </b>
            </p>
            <p>(48 ак.часов по каждой дисциплине)</p>
          </div>
          <div className="EGEDurationCoursesDattaOfClasses">
            <p>2019-2020 г.г. – с 1 октября 2019 по 30 апреля 2020</p>
          </div>
        </div>
      </div>
      <div className="EGEPriceCourses">
        <div className="EGEPriceCoursesContainer">
          <h1>Стоимость курсов подготовки к ОГЭ и ЕГЭ на 2019-2020 год:</h1>
          <div className="EGEPriceCoursesUnderPrice">
            <p>Размер оплаты зависит от количества предметов, посещаемых учащимися.</p>
          </div>
          <div className="EGEPriceCoursesPrice">
            <p>Один предмет:</p>
            <p>
              <b>2 300 руб. в месяц.</b>
            </p>
          </div>
          <div className="EGEPriceCoursesPrice">
            <p>Два предмета:</p>
            <p>
              <b>3000 руб. в месяц.</b>
            </p>
          </div>
          <div className="EGEPriceCoursesPrice">
            <p>Три предмета:</p>
            <p>
              <b>3 500 руб. в месяц.</b>
            </p>
          </div>
          <div className="EGEPriceCoursesPrice">
            <p>Четыре предмета:</p>
            <p>
              <b>4 000 руб. в месяц.</b>
            </p>
          </div>
          <div className="EGEPriceCoursesTextContainer">
            <p>
              Перед началом учебного года все обучающиеся проходят
              <b> обязательное вводное тестирование </b>
              на проверку качества знаний.
            </p>
            <p>
              По результатам тестирования учащимся и их родителям будут даны рекомендации в выборе
              предметов.
            </p>
            <p>
              <b>Цель тестирования</b> – определение уровня знаний и способностей для дальнейшего
              распределения в группу соответствующего уровня.
            </p>
            <p>
              Для каждой группы преподаватели нашего центра разрабатывают
              <b> индивидуальную программу обучения.</b>
            </p>
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
              <img style={{ height: '80px' }} src={calculatorModeCourses}></img>
              <p>Математика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={grammarModeCourses}></img>
              <p>Русский язык</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={bookModeCourses}></img>
              <p>Литература</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={atomModeCourses}></img>
              <p>Физика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={chemistryModeCourses}></img>
              <p>Химия</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={studentModeCourses}></img>
              <p>Обществознание</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={researchModeCourses}></img>
              <p>Биология</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={englandModeCourses}></img>
              <p>Английский язык</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={monitorModeCourses}></img>
              <p>Информатика</p>
            </div>
            <div className="EGEModeCoursesIconsCard">
              <img style={{ height: '80px' }} src={historyModeCourses}></img>
              <p>История</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEGE;
