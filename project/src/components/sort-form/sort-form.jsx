import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list';

function SortForm(props) {
  const {sortType, onSortChange} = props;
  console.log(sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortList onSortChange={onSortChange}/>
    </form>
  );
}

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

// const mapStateToProps = (state) => {
//   console.log(this.state);
// };

const mapDispatchToProps = (dispatch) => ({
  onSortChange() {
    dispatch(ActionCreator.changeSort());
  },
});

SortForm.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export {SortForm};
export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
