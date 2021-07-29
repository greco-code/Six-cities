import React, {useEffect} from 'react';
import Header from '../../header/header';
import ReviewForm from '../../review-form/review-form';
import OfferImages from '../../offer-images/offer-images';
import PremiumLabel from '../../premium-label/premium-label';
import ReviewsList from '../../reviews-list/reviews-list';
import ProLabel from '../../pro-label/pro-label';
import GoodsList from '../../goods-list/goods-list';
import {AuthorizationStatus, CONVERT_TO_RATING, OFFER_LOADING_STATUS, OFFERS_LOADING_STATUS} from '../../../const';
import Map from '../../map/map';
import {useDispatch, useSelector} from 'react-redux';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchComments, fetchNearby, fetchOffer} from '../../../store/api-actions';
import {useParams} from 'react-router-dom';
import NearbyPoints from '../../nearby-points/nearby-points';
import {getComments, getNearbyOffers, getOffer, getOfferLoadingStatus} from '../../../store/data-reducer/selectors';
import {getCity} from '../../../store/interface-reducer/selectors';
import {getAuthStatus} from '../../../store/login-reducer/selectors';
import BookmarkButton from '../../bookmark-button/bookmark-button';
import {BookmarkButtonSettings} from '../../../settings';
import {changeOfferLoadingStatus} from '../../../store/action';
import Toast from '../../../error-banner/error-banner';

function PointInfoPage() {
  const offer = useSelector(getOffer);
  const comments = useSelector(getComments);
  const nearbyOffers = useSelector(getNearbyOffers);
  const city = useSelector(getCity);
  const offerLoadingStatus = useSelector(getOfferLoadingStatus);
  const authorizationStatus = useSelector(getAuthStatus);

  const dispatch = useDispatch();
  const params = useParams();

  const {
    images,
    isFavorite,
    id,
    isPremium,
    rating,
    title,
    type,
    description,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = offer;


  useEffect(() => {
    dispatch(changeOfferLoadingStatus(OFFER_LOADING_STATUS.NOT_LOADED));
    dispatch(fetchOffer(params.id));
    dispatch(fetchComments(params.id));
    dispatch(fetchNearby(params.id));
  }, [dispatch, params.id]);

  return (
    <LoadWrapper isDataLoaded={offerLoadingStatus === OFFER_LOADING_STATUS.LOADED}>
      <div className="page">
        {
          offerLoadingStatus === OFFERS_LOADING_STATUS.ERROR
          && <Toast/>
        }
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            {
              images &&
              <OfferImages images={images.slice(0, 6)}/>
            }
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium &&
                  <PremiumLabel/>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BookmarkButton isFavorite={isFavorite} bookmarkSettings={BookmarkButtonSettings.POINT_INFO} id={id}/>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (`${rating * CONVERT_TO_RATING}%`)}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <GoodsList goods={goods}/>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {

                      host.isPro &&
                      <ProLabel/>
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList
                    comments={comments}
                    id={params.id}
                  />
                  {
                    authorizationStatus === AuthorizationStatus.AUTH &&
                    <ReviewForm id={params.id}/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <LoadWrapper isDataLoaded={offerLoadingStatus === OFFER_LOADING_STATUS.LOADED} isEmpty>
                <Map city={city} offers={nearbyOffers} currentOffer={offer} isPointInfoPage/>
              </LoadWrapper>
            </section>
          </section>
          <div className="container">
            <NearbyPoints nearbyOffers={nearbyOffers}/>
          </div>
        </main>
      </div>
    </LoadWrapper>
  );
}

export default PointInfoPage;
