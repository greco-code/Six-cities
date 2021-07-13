import React, {useEffect, useState} from 'react';
import StarsRating from '../stars-rating/stars-rating';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';


function ReviewForm(props) {
  const {sendReview, id, isCommentSend} = props;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState();


  const handleSubmit = (evt) => {
    evt.preventDefault();

    sendReview(id, {
      comment,
      rating,
    });
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
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount"> 50 characters
          </b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  sendReview: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isCommentSend: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isCommentSend: state.isCommentSend,
});

const mapDispatchToProps = (dispatch) => ({
  sendReview(id, comment) {
    dispatch(postComment(id, comment));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
