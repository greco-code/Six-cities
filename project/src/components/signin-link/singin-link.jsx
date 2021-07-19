import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getLogin} from '../../store/login-reducer/selectors';
import PropTypes from 'prop-types';

function SinginLink(props) {
  const {isAuthorized} = props;

  const login = useSelector(getLogin);

  return (
    <li className="header__nav-item user">
      <span className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          isAuthorized
            ? <Link className="header__user-name user__name" to={AppRoute.FAVORITES}>{login}</Link>
            : <Link className="header__login" to={AppRoute.LOGIN}>Sign in</Link>
        }
      </span>
    </li>
  );
}

SinginLink.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default SinginLink;
