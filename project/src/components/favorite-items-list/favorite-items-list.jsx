import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointSettings.prop';
import Point from '../point/point';
import bookmarkSettingsProp from '../../props/bookmarkSettings.prop';

function FavoriteItemsList(props) {
  const {offers, pointSettings, bookmarkSettings} = props;

  return (
    <div className="favorites__places">
      {
        offers.map((offer) => <Point key={offer.id} offer={offer} pointSettings={pointSettings} bookmarkSettings={bookmarkSettings}/>)
      }
    </div>
  );
}

FavoriteItemsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  pointSettings: pointTypeProp,
  bookmarkSettings: bookmarkSettingsProp,
};

export default FavoriteItemsList;
