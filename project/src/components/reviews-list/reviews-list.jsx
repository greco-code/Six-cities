import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import commentProps from '../../props/comment.prop';

function ReviewsList(props) {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => <Review key={comment.id} comment={comment}/>)
      }
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(commentProps).isRequired,
};

export default ReviewsList;
