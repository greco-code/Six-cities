import React from 'react';

const STARS_AMOUNT = 5;

function StarsRating(props) {
  const {ref, handleChange} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {
        new Array(STARS_AMOUNT).fill().map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={index + 1}
              id={`${index + 1}-stars`}
              type="radio"
              ref={ref}
              onClick={handleChange}
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

export default StarsRating;
