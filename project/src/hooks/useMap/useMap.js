import leaflet from 'leaflet';
import {useEffect, useState} from 'react';

const TILE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const COORDINATES = {
  'Paris': {
    LAT: 48.85661,
    LNG: 2.351499,
  },
  'Cologne': {
    LAT: 50.938361,
    LNG: 6.959974,
  },
  'Brussels': {
    LAT: 50.846557,
    LNG: 4.351697,
  },
  'Amsterdam': {
    LAT: 52.37454,
    LNG: 4.897976,
  },
  'Hamburg': {
    LAT: 53.550341,
    LNG: 10.000654,
  },
  'Dusseldorf': {
    LAT: 51.225402,
    LNG: 6.776314,
  },

};
const ZOOM = 13;


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
