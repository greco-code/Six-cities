import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesItemContainer from '../../favorites-item-container/favorites-item-container';
import PropTypes from 'prop-types';
import offerProp from '../../app/offer.prop';

function FavoritesPage(props) {
  const {favoriteOffers} = props;
  const cities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((city) => <FavoritesItemContainer key={city} city={city} favoriteOffers={favoriteOffers.filter((offer) => offer.city.name === city)}/>)
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

FavoritesPage.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesPage;
