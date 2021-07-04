import React from 'react';
import Logo from '../logo/logo';
import {LogoSettings} from '../../settings';
import AuthLink from '../auth-link/auth-link';

function Header() {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoSettings={LogoSettings.HEADER}/>
          </div>
          <nav className="header__nav">
            <AuthLink/>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
