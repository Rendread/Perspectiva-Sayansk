import React, { Component } from 'react';
import './introContacts.css';
import LocationIntroContacts from '../../icons/locationIntroContacts.svg';
import ClockIntroContact from '../../icons/clockIntroContact.svg';
import PhoneIntroContact from '../../icons/phoneIntroContact.svg';
import TelephoneIntroContact from '../../icons/telephoneIntroContact.svg';
import MailIntroContact from '../../icons/mailIntroContact.svg';
import Pin from '../../icons/pin.svg';
import GoogleMapReact from 'google-map-react';

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
class IntroContacts extends Component {
  static defaultProps = {
    center: {
      lat: 54.1171059,
      lng: 102.1774852,
    },
    zoom: 17,
  };
  render() {
    const key = 'AIzaSyCsymsE4S0uPKFcrjOj7iTa7kI8IWwH6Zo';
    const AnyReactComponent = ({}) => <img src={Pin} style={{ height: '50px' }}></img>;
    return (
      <div>
        <div id="tIntroContacts"></div>
        <div id="IntroContactsWrapper">
          <div className="IntroContacts">
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
          <div className="Map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: key }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
              <AnyReactComponent lat={54.1179401} lng={102.1778313} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroContacts;
