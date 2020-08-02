import React from 'react';
import '../header/header.css';
import Instagramm from '../../icons/instagram-sketched.svg';
import Vk from '../../icons/vk.svg';
import odnoklassniki from '../../icons/odnoklassniki.svg';
import Button from '@material-ui/core/Button';

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
            <div className="ButtonLk">
              <Button variant="contained" color="secondary" className="ButtonLK" size="large">
                Личный кабинет
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
