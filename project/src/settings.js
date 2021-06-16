import dayjs from 'dayjs';

export const LogoSettings = {
  HEADER: {
    width: 81,
    height: 41,
  },

  FOOTER: {
    width: 64,
    height: 33,
  },
};

export const ListSettings = {
  POINTS_AMOUNT: 4,
};

export const PointTypeSettings = {
  MAIN: {
    articleClass: 'cities__place-card place-card',
    imageContainerClass: 'cities__image-wrapper place-card__image-wrapper',
    infoContainerClass: 'place-card__info',
  },

  FAVORITES: {
    articleClass: 'favorites__card place-card',
    imageContainerClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoContainerClass: 'favorites__card-info place-card__info',
  },

  NEIGHBOURHOOD: {
    articleClass: 'near-places__card place-card',
    imageContainerClass: 'near-places__image-wrapper place-card__image-wrapper',
  },
};


export const formatDate = (date) => dayjs(date).format('MMMM YYYY');
