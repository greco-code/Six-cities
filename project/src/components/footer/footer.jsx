import React from 'react';
import Logo from '../logo/logo';
import {LogoSettings} from '../../settings';

function Footer() {
  return (
    <footer className="footer container">
      <Logo logoSettings={LogoSettings.FOOTER}/>
    </footer>
  );
}

export default Footer;
