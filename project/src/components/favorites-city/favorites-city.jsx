import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import FavoriteItemsList from '../favorite-items-list/favorite-items-list';

function FavoritesCity(props) {
  const {city, favoriteOffers, type} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoriteItemsList offers={favoriteOffers} type={type}/>
    </li>
  );
}

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
  type: pointTypeProp,
};

export default FavoritesCity;
