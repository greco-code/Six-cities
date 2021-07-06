import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

function SinginLink(props) {
  const {isAuthorized, login} = props;

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.MAIN : AppRoute.LOGIN}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          isAuthorized
            ? <span className="header__user-name user__name">{login}</span>
            : <span className="header__login">Sign in</span>
        }
      </Link>
    </li>
  );
}

SinginLink.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  login: state.login,
});

export {SinginLink};
export default connect(mapStateToProps)(SinginLink);
