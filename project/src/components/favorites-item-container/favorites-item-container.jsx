import React from 'react';
import FavoriteItem from '../favorites-item/favorite-item';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';

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
      <div className="favorites__places">
        {
          favoriteOffers.map((offer) => <FavoriteItem key={offer.id} offer={offer}/>)
        }
      </div>
    </li>
  );
}

FavoritesItemContainer.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesItemContainer;
