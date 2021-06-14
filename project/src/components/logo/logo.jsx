import React from 'react';
import {Link} from 'react-router-dom';
import {object} from 'prop-types';

function Logo({logoSettings}) {
  return (
    <Link className="footer__logo-link" to="/">
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" {...logoSettings}/>
    </Link>
  );
}

Logo.propTypes = {
  logoSettings: object.isRequired,
};

export default Logo;
