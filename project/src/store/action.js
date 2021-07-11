export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
  SELECT_OFFER: 'selectOffer',
  UNSELECT_OFFER: 'unselectOffer',
  TOGGLE_SORT: 'toggleSort',
  LOAD_OFFERS: 'loadOffers',
  LOAD_COMMENTS: 'loadComments',
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  LOGOUT: 'logout',
  CHANGE_OFFERS_LOADING_STATUS: 'changeOffersLoadingStatus',
  CHANGE_OFFER_LOADING_STATUS: 'changeOfferLoadingStatus',
  SAVE_LOGIN: 'saveLogin',
  REMOVE_LOGIN: 'removeLogin',
  REDIRECT: 'redirect',
  LOAD_OFFER: 'loadOffer',
  LOAD_NEARBY: 'loadNearby',
  ADD_COMMENT: 'addComment',
  ADD_RATING: 'addRating',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort,
  }),
  selectOffer: (offer) => ({
    type: ActionType.SELECT_OFFER,
    payload: offer,
  }),
  unselectOffer: () => ({
    type: ActionType.UNSELECT_OFFER,
    payload: null,
  }),
  toggleSort: (bool) => ({
    type: ActionType.TOGGLE_SORT,
    payload: !bool,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNearby: (offers) => ({
    type: ActionType.LOAD_NEARBY,
    payload: offers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  addComment: (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: comment,
  }),
  addRating: (rating) => ({
    type: ActionType.ADD_RATING,
    payload: rating,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  changeOffersLoadingStatus: (status) => ({
    type: ActionType.CHANGE_OFFERS_LOADING_STATUS,
    payload: !status,
  }),
  changeOfferLoadingStatus: (status) => ({
    type: ActionType.CHANGE_OFFER_LOADING_STATUS,
    payload: !status,
  }),
  saveLogin: (login) => ({
    type: ActionType.SAVE_LOGIN,
    payload: login,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  removeLogin: () => ({
    type: ActionType.REMOVE_LOGIN,
    payload: '',
  }),
  redirect: (url) => ({
    type: ActionType.REDIRECT,
    payload: url,
  }),
};

