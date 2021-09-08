import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/api-actions';
import {removeLogin} from '../../store/action';
import {Link} from 'react-router-dom';

function SignoutLink() {
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
    dispatch(removeLogin());
  };

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        onClick={handleClick}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}


export default SignoutLink;
