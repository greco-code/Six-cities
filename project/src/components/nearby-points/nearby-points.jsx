import React from 'react';
import PointsList from '../points-list/points-list';
import {BookmarkButtonSettings, PointTypeSettings} from '../../settings';
import offerProp from '../../props/offer.prop';
import PropTypes from 'prop-types';

function NearbyPoints(props) {
  const {nearbyOffers} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PointsList
          offers={nearbyOffers}
          pointSettings={PointTypeSettings.NEIGHBOURHOOD}
          bookmarkSettings={BookmarkButtonSettings.NEIGHBOURHOOD}
        />
      </div>
    </section>
  );
}

NearbyPoints.propTypes = {
  nearbyOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default NearbyPoints;
