import React from 'react';
import {SortType} from '../../const';
import SortListItem from '../sort-lsit-item/sort-list-item';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const sortTypes = Object.values(SortType);

function SortList(props) {
  const {changeSort, isSortOpened} = props;

  return (
    <ul className={isSortOpened ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
      {sortTypes
        .map((type) => <SortListItem key={type} sortType={type} changeSort={changeSort}/>)}
    </ul>
  );
}

SortList.propTypes = {
  changeSort: PropTypes.func.isRequired,
  isSortOpened: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  changeSort: ActionCreator.changeSort,
};

const mapStateToProps = (state) => ({
  isSortOpened: state.isSortOpened,
});


export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
