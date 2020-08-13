import React from 'react';
import '../header/header.css';
import Instagramm from '../../icons/instagram-sketched.svg';
import Vk from '../../icons/vk.svg';
import odnoklassniki from '../../icons/odnoklassniki.svg';
import CompanyLogoHeader from '../../icons/companyLogoHeader.svg';
import signInWithGoogle from '../../firebaseGoogle';
import Button from '@material-ui/core/Button';
import { Collapse } from '@material-ui/core';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop < 200) {
    document.getElementById('topbar').style.display = 'block';
    document.getElementById('header').style.height = '90px';
    document.getElementById('Menu').style.margin = '-10px 0px 0px 0px';
    document.getElementById('ButtonLKDiv').style.margin = '-10px 30px 0px 0px';
    document.getElementsByClassName('logoMain')[0].style.margin = '-10px 0px 0px 0px';
  } else {
    document.getElementById('topbar').style.display = 'none';
    document.getElementById('header').style.height = '75px';
    document.getElementById('Menu').style.margin = '20px 0px 0px 0px';
    document.getElementById('ButtonLKDiv').style.margin = '15px 30px 0px 0px';
    document.getElementsByClassName('logoMain')[0].style.margin = '25px 30px 0px 0px';
  }
}

function Header() {
  const [open, setOpen] = React.useState(true);
  return (
    <header id="header">
      <div id="Grid">
        <div id="topbar">
          <div className="social-links">
            <a href="https://ok.ru/profile/587613980691" class="instagram">
              <img height="18" width="18" className="instagramLogo" src={Instagramm}></img>
            </a>
            <a href="https://ok.ru/profile/587613980691" class="Vk">
              <img height="18" width="18" className="VkLogo" src={Vk}></img>
            </a>
            <a href="https://ok.ru/profile/587613980691" class="odnoklassniki">
              <img height="18" width="18" className="odnoklassnikiLogo" src={odnoklassniki}></img>
            </a>
          </div>
        </div>
        <div id="ButtonLKDiv">
          <Button
            variant="contained"
            className="ButtonLK"
            color="primary"
            size="large"
            onClick={signInWithGoogle}>
            Личный кабинет
          </Button>
        </div>
        <div className="logoMain">
          <a href="/">
            <div>
              <div className="logoMainComp">
                <div className="logotextCenterImage">
                  <img src={CompanyLogoHeader}></img>
                </div>
                <div className="logotextCenterText">
                  <p className="logotextCenter">Учебный центр</p>
                  <br></br>
                  <p className="logotextCenter">"ПЕРСПЕКТИВА"</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="LeftNeed" id="Menu">
          <nav class="main-nav float-right d-none d-lg-block">
            <ul class="ul-nav">
              <li class="active">
                <a className="HeaderNavigationMenuText" href="/">
                  Главная
                </a>
              </li>
              <li>
                <a href="/#tAboutCourses">Курсы</a>
              </li>
              <li>
                <a href="/documents">Документы</a>
              </li>
              <li>
                <a href="#tIntroContacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
