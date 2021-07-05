import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

function SignoutLink(props) {
  const {signOut} = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    signOut();
  };

  return (
    <li className="header__nav-item">
      <a
        className="header__nav-link"
        href="#"
        onClick={handleClick}
      >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
    dispatch(ActionCreator.removeLogin());
  },
});

SignoutLink.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export {SignoutLink};
export default connect(null, mapDispatchToProps)(SignoutLink);
