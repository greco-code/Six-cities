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
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  changeOffersLoadingStatus: (status) => ({
    type: ActionType.CHANGE_OFFERS_LOADING_STATUS,
    payload: !status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

