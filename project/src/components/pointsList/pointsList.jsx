import React from 'react';
import PropTypes from 'prop-types';
import Point from '../point/point';

function PointsList(props) {
  const {pointsAmount} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {new Array(pointsAmount).fill().map(((value, index) => <Point key={index}/>))}
    </div>
  );
}

PointsList.propTypes = {
  pointsAmount: PropTypes.number.isRequired,
};

export default PointsList;
