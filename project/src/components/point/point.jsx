import React from 'react';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, CONVERT_TO_RATING} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function Point(props) {
  const {offer, type, onOfferHover, onOfferUnhover} = props;
  const {isPremium, isFavorite, rating, price, previewImage, id, title} = offer;

  return (
    <article
      className={type.articleClass}
      onMouseEnter={() => onOfferHover(offer)}
      onMouseLeave={onOfferUnhover}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={type.imageContainerClass}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className={type.infoContainerClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (`${rating * CONVERT_TO_RATING}%`)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>{title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

Point.propTypes = {
  offer: offerProp,
  type: pointTypeProp,
  onOfferHover: PropTypes.func.isRequired,
  onOfferUnhover: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(offer) {
    dispatch(ActionCreator.selectOffer(offer));
  },
  onOfferUnhover() {
    dispatch(ActionCreator.unselectOffer());
  },
});

export {Point};
export default connect(null, mapDispatchToProps)(Point);
