import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';
import FavoriteItemsList from '../favorite-items-list/favorite-items-list';

function FavoritesItemContainer(props) {
  const {city, favoriteOffers} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoriteItemsList offers={favoriteOffers}/>
    </li>
  );
}

FavoritesItemContainer.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesItemContainer;
