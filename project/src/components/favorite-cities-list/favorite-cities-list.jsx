import React from 'react';
import FavoritesCity from '../favorites-city/favorites-city';
import PropTypes, {string} from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';

function FavoriteCitiesList(props) {
  const {offers, cities, type} = props;

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => <FavoritesCity key={city} city={city} favoriteOffers={offers.filter((offer) => offer.city.name === city)} type={type}/>)
      }
    </ul>
  );
}

FavoriteCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  cities: PropTypes.arrayOf(string).isRequired,
  type: pointTypeProp,
};

export default FavoriteCitiesList;
