import React from 'react';
import PropTypes from 'prop-types';

function ProLabel(props) {
  const {isPro} = props;

  return (
    isPro && (
      <span className="property__user-status">
        Pro
      </span>
    )
  );
}

ProLabel.propTypes = {
  isPro: PropTypes.bool.isRequired,
};

export default ProLabel;
