import React from 'react';
import FavoriteItem from '../favorites-item/favorite-item';
import PropTypes from 'prop-types';
import offerProp from '../app/offer.prop';

function FavoriteItemsList(props) {
  const {offers} = props;

  return (
    <div className="favorites__places">
      {
        offers.map((offer) => <FavoriteItem key={offer.id} offer={offer}/>)
      }
    </div>
  );
}

FavoriteItemsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoriteItemsList;
