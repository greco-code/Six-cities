import React from 'react';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointSettings.prop';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute, CONVERT_TO_RATING} from '../../const';
import {useDispatch} from 'react-redux';
import {selectOffer, unselectOffer} from '../../store/action';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';

function Point(props) {
  const dispatch = useDispatch();

  const {offer, pointSettings, bookmarkSettings} = props;
  const {isPremium, isFavorite, rating, price, previewImage, id, title} = offer;

  const onOfferHover = (hoveredOffer) => {
    dispatch(selectOffer(hoveredOffer));
  };

  const onOfferUnhover = () => {
    dispatch(unselectOffer());
  };

  return (
    <article
      className={pointSettings.articleClass}
      onMouseEnter={() => onOfferHover(offer)}
      onMouseLeave={onOfferUnhover}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={pointSettings.imageContainerClass}>
        <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>
          <img className="place-card__image" src={previewImage} width={pointSettings.imageWidth} height={pointSettings.imageHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={pointSettings.infoContainerClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} bookmarkSettings={bookmarkSettings} id={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (`${Math.round(rating) * CONVERT_TO_RATING}%`)}}/>
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
  pointSettings: pointTypeProp,
  bookmarkSettings: bookmarkSettingsProp,
};

export default Point;
