import React from 'react';
import CitiesList from '../../citiesList/citiesList';
import PropTypes from 'prop-types';
import cityProp from '../../../props/city.prop';
import Header from '../../header/header';

function HeroEmptyPage(props) {
  const {cities, currentCity, onCityChange} = props;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities} onCityChange={onCityChange} currentCity={currentCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"/>
          </div>
        </div>
      </main>
    </div>
  );
}

HeroEmptyPage.propTypes = {
  cities: PropTypes.arrayOf(cityProp).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default HeroEmptyPage;
