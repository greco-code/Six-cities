import React from 'react';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, CONVERT_TO_RATING} from '../../const';
import {useDispatch} from 'react-redux';
import {selectOffer, unselectOffer} from '../../store/action';

function Point(props) {
  const dispatch = useDispatch();

  const {offer, type} = props;
  const {isPremium, isFavorite, rating, price, previewImage, id, title} = offer;

  const onOfferHover = (hoveredOffer) => {
    dispatch(selectOffer(hoveredOffer));
  };

  const onOfferUnhover = () => {
    dispatch(unselectOffer());
  };

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
          <BookmarkButton isFavorite={isFavorite} isFromMain={type.isBookmark} id={id}/>
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
};

export default Point;
