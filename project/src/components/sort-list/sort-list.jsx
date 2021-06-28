import React from 'react';
import {SortType} from '../../const';
import SortListItem from '../sort-lsit-item/sort-list-item';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const sortTypes = Object.values(SortType);

function SortList(props) {
  const {onSortChange, isSortOpened} = props;

  return (
    <ul className={isSortOpened ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
      {sortTypes
        .map((type) => <SortListItem key={type} sortType={type} onSortChange={onSortChange}/>)}
    </ul>
  );
}

SortList.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  isSortOpened: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSortChange(evt) {
    dispatch(ActionCreator.changeSort(evt.target.textContent));
  },
});

const mapStateToProps = (state) => ({
  isSortOpened: state.isSortOpened,
});


export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
