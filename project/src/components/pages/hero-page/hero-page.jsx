import React from 'react';
import PropTypes from 'prop-types';
import PointsList from '../../points-list/points-list';
import Header from '../../header/header';
import offerProp from '../../../props/offer.prop';
import {PointTypeSettings} from '../../../settings';
import Map from '../../map/map';
import CitiesList from '../../citiesList/citiesList';
import {CITIES} from '../../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import {getOffersList, isPlural} from '../../../utils';
import HeroEmptyPage from '../hero-empty-page/hero-empty-page';


function HeroPage(props) {
  const {offers, city, onCityChange} = props;
  const offersByCity = getOffersList(offers, city);

  if (!offersByCity.length) {
    return <HeroEmptyPage cities={CITIES} currentCity={city} onCityChange={onCityChange}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES} onCityChange={onCityChange} currentCity={city}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} {isPlural(offersByCity.length, 'place')} to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PointsList
                  offers={offersByCity}
                  type={PointTypeSettings.MAIN}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offersByCity[0].city} offers={offersByCity}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    dispatch(ActionCreator.changeCity(evt));
  },
});


HeroPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};


export {HeroPage};
export default connect(mapStateToProps, mapDispatchToProps)(HeroPage);
