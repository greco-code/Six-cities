import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites, fetchFavorites, fetchNearby, fetchOffer, fetchOffers} from '../../store/api-actions';
import {getAuthStatus} from '../../store/login-reducer/selectors';
import {redirect} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';

function BookmarkButton(props) {
  const {isFavorite, bookmarkSettings, id} = props;
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const handleClick = () => {
    authStatus === AuthorizationStatus.AUTH
      ? dispatch(addToFavorites(id, Number(!isFavorite)))
      : dispatch(redirect(AppRoute.LOGIN));

    switch (bookmarkSettings.page) {
      case 'NEIGHBOURHOOD':
        dispatch(fetchNearby(id));
        break;
      case 'POINT_INFO':
        dispatch(fetchOffer(id));
        break;
      case 'FAVORITES':
        dispatch(fetchFavorites());
        break;
      case 'MAIN':
        dispatch(fetchOffers());
        break;
      default:
        break;
    }
  };

  return (
    <button
      className={
        isFavorite
          ? bookmarkSettings.buttonActiveClass
          : bookmarkSettings.buttonClass
      }
      type="button"
      onClick={handleClick}
    >
      <svg
        className={bookmarkSettings.iconClass}
        width={bookmarkSettings.iconWidth}
        height={bookmarkSettings.iconHeight}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  bookmarkSettings: bookmarkSettingsProp,
};

export default BookmarkButton;
