import React from 'react';
import {SortType} from '../../const';
import SortListItem from '../sort-lsit-item/sort-list-item';
import {useDispatch, useSelector} from 'react-redux';
import {changeSort} from '../../store/action';
import {getSortStatus} from '../../store/interface-reducer/selectors';

const sortTypes = Object.values(SortType);

function SortList() {
  const isSortOpened = useSelector(getSortStatus);
  const dispatch = useDispatch();

  return (
    <ul className={isSortOpened ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
      {sortTypes
        .map((type) => <SortListItem key={type} sortType={type} changeSort={dispatch(changeSort)}/>)}
    </ul>
  );
}


export default SortList;
