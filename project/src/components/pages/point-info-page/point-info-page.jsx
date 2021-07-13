import React, {useEffect} from 'react';
import Header from '../../header/header';
import PropTypes from 'prop-types';
import offerProp from '../../../props/offer.prop';
import commentProp from '../../../props/comment.prop';
import ReviewForm from '../../review-form/review-form';
import OfferImages from '../../offer-images/offer-images';
import PremiumLabel from '../../premium-label/premium-label';
import ReviewsList from '../../reviews-list/reviews-list';
import ProLabel from '../../pro-label/pro-label';
import GoodsList from '../../goods-list/goods-list';
import {AuthorizationStatus, CONVERT_TO_RATING} from '../../../const';
import Map from '../../map/map';
import {connect, useDispatch} from 'react-redux';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchComments, fetchNearby, fetchOffer} from '../../../store/api-actions';
import {useParams} from 'react-router-dom';
import NearbyPoints from '../../nearby-points/nearby-points';

function PointInfoPage(props) {
  const {offer, comments, nearbyOffers, city, isOfferLoaded, authorizationStatus} = props;
  const {images, isFavorite, isPremium, rating, title, type, description, bedrooms, maxAdults, price, goods, host} = offer;


  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchOffer(params.id));
    dispatch(fetchComments(params.id));
    dispatch(fetchNearby(params.id));
  }, [dispatch, params.id]);

  return (
    <LoadWrapper isDataLoaded={isOfferLoaded}>
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            {
              images &&
              <OfferImages images={images}/>
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
                  <button className={`property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
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
                    authorizationStatus === AuthorizationStatus.AUTH
                      ? <ReviewForm id={params.id}/>
                      : ''
                  }
                </section>
              </div>
            </div>
            <section className="property__map map">
              <LoadWrapper isDataLoaded={isOfferLoaded} isEmpty>
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

PointInfoPage.propTypes = {
  offer: offerProp,
  comments: PropTypes.arrayOf(commentProp).isRequired,
  nearbyOffers: PropTypes.arrayOf(offerProp).isRequired,
  isOfferLoaded: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.selectedOffer,
  comments: state.comments,
  nearbyOffers: state.nearbyOffers,
  isOfferLoaded: state.isOfferLoaded,
  city: state.city,
  authorizationStatus: state.authorizationStatus,
});

export {PointInfoPage};
export default connect(mapStateToProps)(PointInfoPage);
