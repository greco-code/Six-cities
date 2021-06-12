import React, {useState} from 'react';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import BookmarkButton from '../bookmark-button/bookmark-button';

function Point(props) {
  const {offer, type} = props;

  // eslint-disable-next-line no-unused-vars
  const [hoveredOffer, setHoveredOffer] = useState([]);

  return (
    <article
      className={type.articleClass}
      onMouseEnter={() => setHoveredOffer(offer)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={type.imageContainerClass}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={type.infoContainerClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={offer.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (`${offer.rating * 20}%`)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
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
