import React from 'react';
import PropTypes from 'prop-types';
import Point from '../point/point';
import pointProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointSettings.prop';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';

function PointsList(props) {
  const {offers, pointSettings, bookmarkSettings} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {offers.map(((value, index) => <Point key={index} offer={offers[index]} pointSettings={pointSettings} bookmarkSettings={bookmarkSettings}/>))}
    </div>
  );
}

PointsList.propTypes = {
  offers: PropTypes.arrayOf(pointProp).isRequired,
  pointSettings: pointTypeProp,
  bookmarkSettings: bookmarkSettingsProp,
};

export default PointsList;
