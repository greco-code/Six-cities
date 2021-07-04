import React from 'react';
import {AppRoute, AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function AuthLink(props) {
  const {authorizationStatus, login} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <ul className="header__nav-list">
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
      {isAuthorized
        ?
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
        : ''}
    </ul>
  );
}

AuthLink.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  login: state.login,
});

export {AuthLink};
export default connect(mapStateToProps)(AuthLink);
