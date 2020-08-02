import React from 'react';
import './introContacts.css';
import LocationIntroContacts from '../../icons/locationIntroContacts.svg';
import ClockIntroContact from '../../icons/clockIntroContact.svg';
import PhoneIntroContact from '../../icons/phoneIntroContact.svg';
import TelephoneIntroContact from '../../icons/telephoneIntroContact.svg';
import MailIntroContact from '../../icons/mailIntroContact.svg';

function IntroContacts() {
  return (
    <div className="IncroContactsWrapper">
      <div className="IncroContacts">
        <div className="ContactsBlock">
          <img src={LocationIntroContacts}></img>
          <p>666303, РФ, Иркутская область, г. Саянск, мкр. Строителей, дом 32</p>
        </div>
        <div className="ContactsBlock">
          <img src={ClockIntroContact}></img>
          <p>Понедельник-Пятница с 10:00 до 18:00</p>
        </div>
        <div className="ContactsBlock">
          <img src={PhoneIntroContact}></img>
          <p>8-395-53-5-12-22</p>
        </div>
        <div className="ContactsBlock">
          <img src={TelephoneIntroContact}></img>
          <p>8-908-644-77-84</p>
        </div>
        <div className="ContactsBlock">
          <img src={MailIntroContact}></img>
          <p>perspektiva_nou@mail.ru</p>
        </div>
      </div>
      <div className="Map"></div>
    </div>
  );
}

export default IntroContacts;
