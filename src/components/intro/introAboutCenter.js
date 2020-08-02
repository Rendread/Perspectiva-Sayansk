import React from 'react';
import './introAboutCenter.css';
import { Divider } from '@material-ui/core';
import ExperienceInro from '../../icons/experienceIntro.svg';
import BoardAboutIntro from '../../icons/boardAboutIntro.svg';
import CertificateAboutIntro from '../../icons/certificateAboutIntro.svg';

function IntroAboutCenter() {
  return (
    <div className="AboutCenterGrid">
      <div className="AboutCenterMain">
        <div className="AboutCenterDivText">
          <p>О центре</p>
        </div>
        <div className="AboutCenterMainGrid">
          <div></div>
          <div>
            <div className="AboutCenterCardIcon">
              <div className="AboutCenterIcon">
                <img className="AboutCenterIconSVG" src={ExperienceInro}></img>
              </div>
            </div>
            <div className="AboutCenterCardText">
              <p>Большой опыт работы</p>
              <div className="IntroAboutCenterLine"></div>
              <p2>
                Уже 11 лет наш учебный центр занимается реализацией дополнительных профессиональных
                программ.
              </p2>
            </div>
          </div>
          <div></div>
          <div>
            <div className="AboutCenterCardIcon">
              <div className="AboutCenterIcon">
                <img className="AboutCenterIconSVG" src={BoardAboutIntro}></img>
              </div>
            </div>
            <div className="AboutCenterCardTextTeacher">
              <p>Высококвалифицированные преподаватели</p>
              <div className="IntroAboutCenterLine"></div>
              <p2>
                Обучение проводится высококвалифицированными преподавателями с большим опытом
                работы.
              </p2>
            </div>
          </div>
          <div></div>
          <div>
            <div className="AboutCenterCardIcon">
              <div className="AboutCenterIcon">
                <img className="AboutCenterIconSVGCertificate" src={CertificateAboutIntro}></img>
              </div>
            </div>
            <div className="AboutCenterCardText">
              <p>Сертификат </p>
              <div className="IntroAboutCenterLine"></div>
              <p2>
                По окончании обучения в центре вы получаете документы установленного образца. Это
                дает гарантию качества полученных знаний и целесообразность ваших вложений.
              </p2>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default IntroAboutCenter;
