const firstOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar.svg',
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'Apartment',
};

const secondOffer = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 48.864716,
      longitude: -2.349014,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'WiFi', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/2.png',
    id: 2,
    isPro: true,
    name: 'Victor',
  },
  id: 2,
  images: ['img/2.png', 'img/4.png'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 48.86471609098,
    longitude: 2.349014079098,
    zoom: 8,
  },
  maxAdults: 32,
  previewImage: 'img/apartment-03.jpg',
  price: 100,
  rating: 4.9,
  title: 'Nice & luxurious studio at great location',
  type: 'Flat',
};

const thirdOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 50.941357,
      longitude: 6.958307,
      zoom: 10,
    },
    name: 'Cologne',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
  goods: ['Heating', 'Kitchen', 'Laptop', 'Washing machine', 'WiFi'],
  host: {
    avatarUrl: 'img/3.png',
    id: 3,
    isPro: true,
    name: 'Helix',
  },
  id: 3,
  images: ['img/5.png', 'img/1.png'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 50.94135709496378,
    longitude: 6.958307049998948,
    zoom: 8,
  },
  maxAdults: 5,
  previewImage: 'img/apartment-02.jpg',
  price: 90,
  rating: 4.4,
  title: 'Awesome & luxurious studio at great location',
  type: 'House',
};

const fourthOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 10,
    },
    name: 'Brussels',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
  goods: ['Heating', 'Kitchen', 'Webstorm', 'Macbook', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 4,
    isPro: true,
    name: 'Mike',
  },
  id: 4,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 50.85056209406378,
    longitude: 4.348809788496378,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 150,
  rating: 50,
  title: 'Top top top',
  type: 'Apartment',
};

const offers = [firstOffer, secondOffer, thirdOffer, fourthOffer];

export {offers};

