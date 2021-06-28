import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import useMap from '../../hooks/useMap/useMap';
import {connect} from 'react-redux';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// eslint-disable-next-line no-unused-vars
const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});


function Map(props) {
  const {city, offers, currentOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      markers.clearLayers();
      offers.forEach((offer) => {
        const marker = leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (currentOffer && offer.id === currentOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          });
        markers.addLayer(marker);
      });
      markers.addTo(map);
    }

    return () => {
      markers.clearLayers();
    };

  }, [map, offers, currentOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }),
  currentOffer: offerProp,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
});

export {Map};
export default connect(mapStateToProps, null)(Map);