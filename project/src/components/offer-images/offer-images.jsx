import React from 'react';
import PropTypes, {string} from 'prop-types';

function OfferImages(props) {
  const {images} = props;
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, index) => (
          <div key={`${index + image}`} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

OfferImages.propTypes = {
  images: PropTypes.arrayOf(string),
};

export default OfferImages;
