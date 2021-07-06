export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites-page',
  ROOM: '/offer/:id',
};

export const CONVERT_TO_RATING = 20;

export const CITIES = [
  {
    city: 'Paris',
    id: 1001,
  },
  {
    city: 'Cologne',
    id: 1002,
  },
  {
    city: 'Brussels',
    id: 1003,
  },
  {
    city: 'Amsterdam',
    id: 1004,
  },
  {
    city: 'Hamburg',
    id: 1005,
  },
  {
    city: 'Dusseldorf',
    id: 1006,
  },
];

export const SortType = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const COORDINATES = {
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
export const ZOOM = 13;
