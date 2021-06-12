import React from 'react';
import PropTypes from 'prop-types';
import Point from '../point/point';
import pointProp from '../app/offer.prop';

function PointsList(props) {
  const {pointsAmount, offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {new Array(pointsAmount).fill().map(((value, index) => <Point key={index} offer={offers[index]}/>))}
    </div>
  );
}

PointsList.propTypes = {
  pointsAmount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(pointProp).isRequired,
};

export default PointsList;
