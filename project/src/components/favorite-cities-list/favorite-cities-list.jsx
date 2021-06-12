import React from 'react';
import FavoritesItemContainer from '../favorites-item-container/favorites-item-container';
import PropTypes, {string} from 'prop-types';
import offerProp from '../app/offer.prop';

function FavoriteCitiesList(props) {
  const {offers, cities} = props;

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => <FavoritesItemContainer key={city} city={city} favoriteOffers={offers.filter((offer) => offer.city.name === city)}/>)
      }
    </ul>
  );
}

FavoriteCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  cities: PropTypes.arrayOf(string).isRequired,
};

export default FavoriteCitiesList;
