import React from 'react';
import PropTypes from 'prop-types';

function BookmarkButton(props) {
  const {isFavorite} = props;

  return (
    <button className={`place-card__bookmark-button button + ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkButton;
