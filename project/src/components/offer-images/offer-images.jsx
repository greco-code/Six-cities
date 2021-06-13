import React from 'react';

function OfferImages(props) {
  const {images} = props;
  return (
    images && images.map((image, index) => (
      <div key={`${index + image}`} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio"/>
      </div>
    ))
  );
}

export default OfferImages;
