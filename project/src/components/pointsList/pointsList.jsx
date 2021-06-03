import React from 'react';
import PropTypes from 'prop-types';
import Point from '../point/point';

function PointsList(props) {
  const {pointsAmount} = props;

  const points = new Array(pointsAmount).fill().map(((value, index) => <Point key={index}/>));

  return (
    <div className="cities__places-list places__list tabs__content">
      {points}
    </div>
  );
}

PointsList.propTypes = {
  pointsAmount: PropTypes.number.isRequired,
};

export default PointsList;
