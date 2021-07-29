import React, {useEffect, useState} from 'react';
import StarsRating from '../stars-rating/stars-rating';
import {useDispatch, useSelector} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {getCommentSendingStatus} from '../../store/data-reducer/selectors';

const MINIMUM_COMMENT_LENGTH = 50;


function ReviewForm(props) {
  const {id} = props;

  const dispatch = useDispatch();
  const isCommentSend = useSelector(getCommentSendingStatus);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');


  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(postComment(id, {
      comment,
      rating,
    }));
  };

  useEffect(() => {
    if (isCommentSend) {
      setComment('');
      setRating(0);
    }
  }, [isCommentSend]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRating
        rating={rating}
        setRating={setRating}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => setComment(evt.target.value)}
        maxLength="300"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount"> 50 characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            comment.length < MINIMUM_COMMENT_LENGTH ||
            !rating
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewForm;
