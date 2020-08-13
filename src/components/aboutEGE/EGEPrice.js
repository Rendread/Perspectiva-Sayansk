import React from 'react';

function EGEPrice() {
  return (
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
  );
}

export default EGEPrice;
