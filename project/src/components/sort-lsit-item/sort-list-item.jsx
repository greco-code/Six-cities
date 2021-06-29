import React from 'react';
import PropTypes from 'prop-types';

function SortListItem(props) {
  const {sortType, changeSort} = props;

  return (
    <li className="places__option" tabIndex="0" onClick={(evt) => changeSort(evt.target.textContent)}>{sortType}</li>
  );
}

SortListItem.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
};

export default SortListItem;
