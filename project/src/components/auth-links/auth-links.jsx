import React from 'react';
import {AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignoutLink from '../singout-link/signout-link';
import SinginLink from '../signin-link/singin-link';

function AuthLinks(props) {
  const {authorizationStatus} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <ul className="header__nav-list">
      <SinginLink isAuthorized={isAuthorized}/>
      {isAuthorized ? <SignoutLink/> : ''}
    </ul>
  );
}

AuthLinks.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {AuthLinks};
export default connect(mapStateToProps)(AuthLinks);
