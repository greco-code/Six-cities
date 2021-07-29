import React, {useEffect} from 'react';
import PointsList from '../../points-list/points-list';
import Header from '../../header/header';
import {BookmarkButtonSettings, PointTypeSettings} from '../../../settings';
import Map from '../../map/map';
import CitiesList from '../../citiesList/citiesList';
import {CITIES, OFFERS_LOADING_STATUS} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getOffersList, isPlural} from '../../../utils';
import HeroEmptyPage from '../hero-empty-page/hero-empty-page';
import SortForm from '../../sort-form/sort-form';
import {sort} from '../../../sort';
import {fetchOffers} from '../../../store/api-actions';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {getOffers, getOffersLoadingStatus} from '../../../store/data-reducer/selectors';
import {getCity, getHoveredOffer, getSortType} from '../../../store/interface-reducer/selectors';
import {changeOffersLoadingStatus} from '../../../store/action';
import Toast from '../../../error-banner/error-banner';


function HeroPage() {
  const offers = useSelector(getOffers);
  const city = useSelector(getCity);
  const currentSortType = useSelector(getSortType);
  const hoveredOffer = useSelector(getHoveredOffer);
  const offersLoadingStatus = useSelector(getOffersLoadingStatus);

  const offersByCity = offers && getOffersList(offers, city);
  const sortedOffers = offersByCity && sort(currentSortType, offersByCity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeOffersLoadingStatus(OFFERS_LOADING_STATUS.NOT_LOADED));
    dispatch(fetchOffers());
  }, [dispatch]);


  if (!sortedOffers.length && offersLoadingStatus !== OFFERS_LOADING_STATUS.LOADED) {
    return (
      <>
        {
          offersLoadingStatus === OFFERS_LOADING_STATUS.ERROR
          && <Toast/>
        }
        <HeroEmptyPage cities={CITIES} currentCity={city}/>
      </>
    );
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
                <LoadWrapper isDataLoaded={offersLoadingStatus === OFFERS_LOADING_STATUS.LOADED}>
                  <PointsList
                    offers={sortedOffers}
                    pointSettings={PointTypeSettings.MAIN}
                    bookmarkSettings={BookmarkButtonSettings.MAIN}
                  />
                </LoadWrapper>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <LoadWrapper isDataLoaded={offersLoadingStatus === OFFERS_LOADING_STATUS.LOADED} isEmpty>
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

export default HeroPage;
