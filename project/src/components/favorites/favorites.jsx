import React from 'react';
import FavoriteCitiesList from '../favorite-cities-list/favorite-cities-list';
import {PointTypeSettings} from '../../settings';
import {arrayOf} from 'prop-types';
import offerProp from '../../props/offer.prop';
import cityProp from '../../props/city.prop';

function Favorites(props) {
  const {favoriteOffers, cities} = props;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCitiesList offers={favoriteOffers} cities={cities} type={PointTypeSettings.FAVORITES}/>
        </section>
      </div>
    </main>
  );
}

Favorites.propTypes = {
  favoriteOffers: arrayOf(offerProp).isRequired,
  cities: arrayOf(cityProp).isRequired,
};

export default Favorites;
