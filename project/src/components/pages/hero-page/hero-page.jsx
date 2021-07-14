import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PointsList from '../../points-list/points-list';
import Header from '../../header/header';
import offerProp from '../../../props/offer.prop';
import {PointTypeSettings} from '../../../settings';
import Map from '../../map/map';
import CitiesList from '../../citiesList/citiesList';
import {CITIES} from '../../../const';
import {connect, useDispatch} from 'react-redux';
import {getOffersList, isPlural} from '../../../utils';
import HeroEmptyPage from '../hero-empty-page/hero-empty-page';
import SortForm from '../../sort-form/sort-form';
import {sort} from '../../../sort';
import {fetchOffers} from '../../../store/api-actions';
import LoadWrapper from '../../load-wrapper/load-wrapper';


function HeroPage(props) {
  const {offers, city, currentSortType, hoveredOffer, isOffersLoaded} = props;
  const offersByCity = offers && getOffersList(offers, city);
  const sortedOffers = offersByCity && sort(currentSortType, offersByCity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);


  if (!sortedOffers.length && isOffersLoaded) {
    return <HeroEmptyPage cities={CITIES} currentCity={city}/>;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES} currentCity={city}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} {isPlural(sortedOffers.length, 'place')} to stay in {city}</b>
              <SortForm/>
              <div className="cities__places-list places__list tabs__content">
                <LoadWrapper isDataLoaded={isOffersLoaded}>
                  <PointsList
                    offers={sortedOffers}
                    type={PointTypeSettings.MAIN}
                  />
                </LoadWrapper>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <LoadWrapper isDataLoaded={isOffersLoaded} isEmpty>
                  <Map city={city} offers={sortedOffers} currentOffer={hoveredOffer}/>
                </LoadWrapper>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


HeroPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  hoveredOffer: offerProp,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  currentSortType: state.sortType,
  hoveredOffer: state.hoveredOffer,
  isOffersLoaded: state.isOffersLoaded,
});


export {HeroPage};
export default connect(mapStateToProps)(HeroPage);
