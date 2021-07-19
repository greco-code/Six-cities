import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SortList from '../sort-list/sort-list';
import {toggleSort} from '../../store/action';
import {getSortStatus, getSortType} from '../../store/interface-reducer/selectors';

function SortForm() {
  const sortType = useSelector(getSortType);
  const isSortOpened = useSelector(getSortStatus);

  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => dispatch(toggleSort(isSortOpened))}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortList currentSortType={sortType}/>
    </form>
  );
}

export default SortForm;
