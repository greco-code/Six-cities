import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import commentProps from '../../props/comment.prop';

function ReviewsList(props) {
  const {comments} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments
            .slice(0, 10)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((comment) => <Review key={comment.id} comment={comment}/>)
        }
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(commentProps).isRequired,
};

export default ReviewsList;
