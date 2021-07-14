import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import commentProps from '../../props/comment.prop';
import {fetchComments} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

function ReviewsList(props) {
  const {comments, id} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(id));
  });

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => <Review key={comment.id} comment={comment}/>)
        }
      </ul>
    </React.Fragment>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(commentProps).isRequired,
  id: PropTypes.string.isRequired,
};

export default ReviewsList;
