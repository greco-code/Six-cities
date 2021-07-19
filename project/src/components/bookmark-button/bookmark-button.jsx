import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites} from '../../store/api-actions';
import {getAuthStatus} from '../../store/login-reducer/selectors';
import {redirect} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';

function BookmarkButton(props) {
  const {isFavorite, isFromMain, id} = props;
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const handleClick = () => {
    authStatus === AuthorizationStatus.AUTH
      ? dispatch(addToFavorites(id, Number(isFavorite)))
      : dispatch(redirect(AppRoute.LOGIN));
  };

  return (
    <button
      className={isFromMain
        ? `place-card__bookmark-button button + ${isFavorite && 'place-card__bookmark-button--active'}`
        : `property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={isFromMain ? 'place-card__bookmark-icon' : 'property__bookmark-icon'}
        width={isFromMain ? '18' : '31'}
        height={isFromMain ? '19' : '33'}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool,
  isFromMain: PropTypes.bool,
  id: PropTypes.number,
};

export default BookmarkButton;
