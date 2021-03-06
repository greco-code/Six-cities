import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointSettings.prop';
import FavoriteItemsList from '../favorite-items-list/favorite-items-list';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';
import {Link} from 'react-router-dom';

function FavoritesCity(props) {
  const {city, favoriteOffers, pointSettings, bookmarkSettings} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoriteItemsList offers={favoriteOffers} pointSettings={pointSettings} bookmarkSettings={bookmarkSettings}/>
    </li>
  );
}

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
  pointSettings: pointTypeProp,
  bookmarkSettings: bookmarkSettingsProp,
};

export default FavoritesCity;
