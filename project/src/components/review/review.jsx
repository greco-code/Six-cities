import React from 'react';
import {formatDate} from '../../settings';
import commentProp from '../../props/comment.prop';
import {CONVERT_TO_RATING} from '../../const';

function Review(props) {
  const {comment} = props;
  const {user, rating, date} = comment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: (`${rating * CONVERT_TO_RATING}%`)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate(date)}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  comment: commentProp,
};

export default Review;
