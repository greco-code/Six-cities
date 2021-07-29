import React from 'react';
import {AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import SignoutLink from '../singout-link/signout-link';
import SinginLink from '../signin-link/singin-link';
import {getAuthStatus} from '../../store/login-reducer/selectors';

function AuthLinks() {
  const authorizationStatus = useSelector(getAuthStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <ul className="header__nav-list">
      <SinginLink isAuthorized={isAuthorized}/>
      {isAuthorized ? <SignoutLink/> : ''}
    </ul>
  );
}

export default AuthLinks;
