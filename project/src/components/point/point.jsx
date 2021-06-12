import React, {useState} from 'react';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function Point(props) {
  const {offer, type} = props;
  const {isPremium, isFavorite, rating, price, previewImage, id, title} = offer;

  // eslint-disable-next-line no-unused-vars
  const [hoveredOffer, setHoveredOffer] = useState([]);

  return (
    <article
      className={type.articleClass}
      onMouseEnter={() => setHoveredOffer(offer)}
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
            <span style={{width: (`${rating * 20}%`)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>{title}</Link>
        </h2>
      </div>
    </article>
  );
}

Point.propTypes = {
  offer: offerProp,
  type: pointTypeProp,
};

export default Point;
