import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import PropTypes from 'prop-types';
import offerProp from '../../../props/offer.prop';
import FavoriteCitiesList from '../../favorite-cities-list/favorite-cities-list';
import {PointTypeSettings} from '../../../settings';
import {connect} from 'react-redux';


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
            <FavoriteCitiesList offers={favoriteOffers} cities={cities} type={PointTypeSettings.FAVORITES}/>
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

const mapStateToProps = (state) => ({
  favoriteOffers: state.offers.filter((offer) => offer.isFavorite),
});


export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
