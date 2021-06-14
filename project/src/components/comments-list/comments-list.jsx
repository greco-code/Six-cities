import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/comment';
import commentProps from '../../props/comment.prop';

function CommentsList(props) {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
      }
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(commentProps).isRequired,
};

export default CommentsList;
