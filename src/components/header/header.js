import React from 'react';
import '../../css/header.css';
import Instagramm from '../../icons/instagram-sketched.svg';
import Vk from '../../icons/vk.svg';
import odnoklassniki from '../../icons/odnoklassniki.svg';
import Down from '../../icons/down-arrow.png';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop < 200) {
    document.getElementById('topbar').style.display = 'block';
    document.getElementById('header').style.height = '110px';
  } else {
    document.getElementById('topbar').style.display = 'none';
    document.getElementById('header').style.height = '75px';
  }
}

function Header() {
  return (
    <header id="header">
      <div id="topbar">
        <div className="container">
          <div className="social-links">
            <a href="https://vk.com/id220937096" class="instagram">
              <img height="18" width="18" className="instagramLogo" src={Instagramm}></img>
            </a>
            <a href="https://vk.com/id220937096" class="Vk">
              <img height="18" width="18" className="VkLogo" src={Vk}></img>
            </a>
            <a href="https://vk.com/id220937096" class="odnoklassniki">
              <img height="18" width="18" className="odnoklassnikiLogo" src={odnoklassniki}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="logo float-left">
          <h1 class="text-light">
            <a href="#intro" class="scrollto">
              <span>Перспектива</span>
            </a>
          </h1>
        </div>
        <div className="LeftNeed">
          <nav class="main-nav float-right d-none d-lg-block">
            <ul class="ul-nav">
              <li class="active">
                <a href="#intro">Главная</a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#services">Документы</a>
              </li>
              <li>
                <a href="#team">Команда</a>
              </li>

              <li>
                <a href="#footer">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
