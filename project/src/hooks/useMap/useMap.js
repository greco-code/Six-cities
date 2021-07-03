import leaflet from 'leaflet';
import {useEffect, useState} from 'react';
import {COORDINATES, ZOOM} from '../../const';

const TILE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet
        .map(mapRef.current, {
          center: {
            lat: COORDINATES[city].LAT,
            lng: COORDINATES[city].LNG,
          },
          zoom: ZOOM,
        });

      leaflet
        .tileLayer(
          TILE,
          {
            attribution: COPYRIGHT,
          },
        ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
