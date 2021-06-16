import React from 'react';
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
import {CONVERT_TO_RATING} from '../../../const';
import PointsList from '../../points-list/points-list';
import {PointTypeSettings} from '../../../settings';

const MAX_NEIGHBOURHOOD_OFFERS = 3;

function PointInfoPage(props) {
  const {offer, comments, neighbourhoodOffers} = props;
  const {isPremium, isFavorite, title, rating, bedrooms, maxAdults, host, description, goods, type, price, images} = offer;

  return (
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList
                  comments={comments}
                />
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PointsList
                offers={neighbourhoodOffers}
                pointsAmount={MAX_NEIGHBOURHOOD_OFFERS}
                type={PointTypeSettings.NEIGHBOURHOOD}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PointInfoPage.propTypes = {
  offer: offerProp,
  comments: PropTypes.arrayOf(commentProp).isRequired,
  neighbourhoodOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default PointInfoPage;
