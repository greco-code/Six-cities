import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import pointTypeProp from '../../props/pointType.prop';
import Point from '../point/point';

function FavoriteItemsList(props) {
  const {offers, type} = props;

  return (
    <div className="favorites__places">
      {
        offers.map((offer) => <Point key={offer.id} offer={offer} type={type}/>)
      }
    </div>
  );
}

FavoriteItemsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  type: pointTypeProp,
};

export default FavoriteItemsList;
