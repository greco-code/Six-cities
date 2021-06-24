import React from 'react';
import PropTypes from 'prop-types';

function SortListItem(props) {
  const {sortType, onSortChange} = props;

  return (
    <li className="places__option" tabIndex="0" onClick={onSortChange}>{sortType}</li>
  );
}

SortListItem.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortListItem;
