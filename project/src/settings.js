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
    isBookmark: true,
    imageWidth: 260,
    imageHeight: 200,
  },

  FAVORITES: {
    articleClass: 'favorites__card place-card',
    imageContainerClass: 'favorites__image-wrapper place-card__image-wrapper',
    infoContainerClass: 'favorites__card-info place-card__info',
    imageWidth: 150,
    imageHeight: 110,
  },

  NEIGHBOURHOOD: {
    articleClass: 'near-places__card place-card',
    imageContainerClass: 'near-places__image-wrapper place-card__image-wrapper',
    imageWidth: 260,
    imageHeight: 200,
  },
};

export const BookmarkButtonSettings = {
  MAIN: {
    page: 'MAIN',
    buttonClass: 'place-card__bookmark-button button',
    buttonActiveClass: 'place-card__bookmark-button place-card__bookmark-button--active button',
    iconClass: 'place-card__bookmark-icon',
    iconWidth: 18,
    iconHeight: 19,
  },
  FAVORITES: {
    page: 'FAVORITES',
    buttonClass: 'place-card__bookmark-button button',
    buttonActiveClass: 'place-card__bookmark-button place-card__bookmark-button--active button',
    iconClass: 'place-card__bookmark-icon',
    iconWidth: 18,
    iconHeight: 19,
  },
  POINT_INFO: {
    page: 'POINT_INFO',
    buttonClass: 'property__bookmark-button button',
    buttonActiveClass: 'property__bookmark-button button property__bookmark-button--active',
    iconClass: 'property__bookmark-icon',
    iconWidth: 31,
    iconHeight: 33,
  },
  NEIGHBOURHOOD: {
    page: 'NEIGHBOURHOOD',
    buttonClass: 'place-card__bookmark-button button',
    buttonActiveClass: 'place-card__bookmark-button place-card__bookmark-button--active button',
    iconClass: 'place-card__bookmark-icon',
    iconWidth: 18,
    iconHeight: 19,
  },
};


export const formatDate = (date) => dayjs(date).format('MMMM YYYY');
