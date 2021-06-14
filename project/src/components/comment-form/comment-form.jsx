import React, {useState} from 'react';
import StarsRating from '../stars-rating/stars-rating';

function CommentForm() {
  // eslint-disable-next-line no-unused-vars
  const [comment, setComment] = useState('');

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        const writtenComment = document.querySelector('.reviews__textarea').value;
        setComment(writtenComment);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarsRating/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
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

export default CommentForm;
