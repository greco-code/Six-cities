const firstOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
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
  images: ['img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
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
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    name: 'Amsterdam',
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
  images: ['img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
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
      latitude: 52.38333,
      longitude: 4.9,
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
  images: ['img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
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
      latitude: 52.38333,
      longitude: 4.9,
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
  images: ['img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg', 'img/amsterdam.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
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

