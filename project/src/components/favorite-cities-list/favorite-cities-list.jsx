import React from 'react';
import FavoritesCity from '../favorites-city/favorites-city';
import PropTypes, {string} from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointSettings.prop';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';

function FavoriteCitiesList(props) {
  const {offers, cities, pointSettings, bookmarkSettings} = props;

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <FavoritesCity
            key={city}
            city={city}
            favoriteOffers={offers.filter((offer) => offer.city.name === city)}
            pointSettings={pointSettings}
            bookmarkSettings={bookmarkSettings}
          />
        ))
      }
    </ul>
  );
}

FavoriteCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  cities: PropTypes.arrayOf(string).isRequired,
  pointSettings: pointTypeProp,
  bookmarkSettings: bookmarkSettingsProp,
};

export default FavoriteCitiesList;
