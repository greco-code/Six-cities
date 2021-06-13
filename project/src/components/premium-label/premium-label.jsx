import React from 'react';
import PropTypes from 'prop-types';

function PremiumLabel(props) {
  const {isPremium} = props;

  return (
    isPremium && (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    )
  );
}

PremiumLabel.propTypes = {
  isPremium: PropTypes.bool.isRequired,
};

export default PremiumLabel;
