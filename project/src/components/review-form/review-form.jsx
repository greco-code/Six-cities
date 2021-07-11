import React, {useRef, useState} from 'react';
import StarsRating from '../stars-rating/stars-rating';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';

function ReviewForm(props) {
  const {sendReview, id} = props;

  const [comment, setComment] = useState({
    comment: '',
    rating: null,
  });

  const reviewRef = useRef();
  const ratingRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    sendReview(id, {
      comment: comment.comment,
      rating: comment.rating,
    });
  };

  const handleCommentChange = (evt) => {
    setComment((prevState) => ({...prevState, comment: evt.target.value}));
  };

  const handleRatingChange = (evt) => {
    setComment((prevState) => ({...prevState, rating: evt.target.value}));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRating
        ref={ratingRef}
        handleChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={reviewRef}
        value={comment.value}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters
          </b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  sendReview: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendReview(id, comment) {
    dispatch(postComment(id, comment));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
