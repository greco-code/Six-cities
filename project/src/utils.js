import {AuthorizationStatus} from './const';

export const getOffersList = (offers, city) => offers.filter((offer) => offer.city.name === city);

export const isPlural = (amount, word, suffix = 's') => {
  if (amount !== 1) {
    return `${word}${suffix}`;
  } else {
    return word;
  }
};

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;

export const defaultOffer = {
  bedrooms: null,
  city: {
    location: {
      latitude: null,
      longitude: null,
      zoom: null,
    },
    name: '',
  },
  description: '',
  goods: [],
  host: {
    avatarUrl: '',
    id: null,
    isPro: null,
    name: '',
  },
  id: null,
  images: [],
  isFavorite: null,
  isPremium: null,
  location: {
    latitude: null,
    longitude: null,
    zoom: null,
  },
  maxAdults: null,
  previewImage: '',
  price: null,
  rating: null,
  title: '',
  type: '',
};
