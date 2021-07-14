import PropTypes from 'prop-types';

export default PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }).isRequired,
    name: PropTypes.string,
  }).isRequired,
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
});
