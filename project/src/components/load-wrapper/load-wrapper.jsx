import React from 'react';
import Spinner from '../spinner/spinner';
import PropTypes from 'prop-types';

function LoadWrapper(props) {
  const {isDataLoaded, children, Loader = Spinner, isEmpty = false} = props;

  if (isEmpty && !isDataLoaded) {
    return '';
  }

  return (
    (isDataLoaded && children) || <Loader/>
  );
}

LoadWrapper.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  children: PropTypes.object,
  Loader: PropTypes.string,
  isEmpty: PropTypes.bool,
};

export default LoadWrapper;
