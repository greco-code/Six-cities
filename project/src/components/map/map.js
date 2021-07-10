import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import offerProp from '../../props/offer.prop';
import useMap from '../../hooks/useMap/useMap';
import {COORDINATES, ZOOM} from '../../const';

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

  const fullOffers = offers.slice();
  fullOffers.push(currentOffer);

  useEffect(() => {
    if (map) {
      map.flyTo(leaflet.latLng(COORDINATES[city].LAT, COORDINATES[city].LNG), ZOOM);

      markers.clearLayers();
      fullOffers.forEach((offer) => {
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
  city: PropTypes.string.isRequired,
  currentOffer: offerProp,
};

export default Map;
