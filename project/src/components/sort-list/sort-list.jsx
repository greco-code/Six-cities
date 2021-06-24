import React from 'react';
import {SortType} from '../../const';
import SortListItem from '../sort-lsit-item/sort-list-item';
import PropTypes from 'prop-types';

const sortTypes = Object.values(SortType);

function SortList(props) {
  const {onSortChange} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortTypes.map((type) => <SortListItem key={type} sortType={type} onSortChange={onSortChange}/>)}
    </ul>
  );
}

SortList.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};


export default SortList;
