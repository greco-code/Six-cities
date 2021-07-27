import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {changeSort} from '../../store/action';

function SortListItem(props) {
  const {sortType} = props;
  const dispatch = useDispatch();
  // console.log(sortType)
  // console.log(changeSort)

  return (
    <li className="places__option" tabIndex="0" onClick={(evt) => dispatch(changeSort(evt.target.textContent))}>{sortType}</li>
  );
}

SortListItem.propTypes = {
  sortType: PropTypes.string.isRequired,
};

export default SortListItem;
