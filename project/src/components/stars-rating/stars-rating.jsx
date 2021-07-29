import React from 'react';
import PropTypes from 'prop-types';

const STARS_AMOUNT = 5;

function StarsRating(props) {
  const {rating, setRating} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {
        new Array(STARS_AMOUNT).fill().map((value, index) => (
          //todo убрать индекс
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={STARS_AMOUNT - index}
              id={`${index + 1}-stars`}
              type="radio"
              onChange={(evt) => setRating(Number(evt.target.value))}
              checked={rating === STARS_AMOUNT - index}
            />
            <label htmlFor={`${index + 1}-stars`} className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))
      }
    </div>
  );
}

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default StarsRating;
