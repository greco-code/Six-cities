import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/api-actions';
import {removeLogin} from '../../store/action';

function SignoutLink() {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
    dispatch(removeLogin());
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


export default SignoutLink;
