export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
  SELECT_OFFER: 'selectOffer',
  UNSELECT_OFFER: 'unselectOffer',
  TOGGLE_SORT: 'toggleSort',
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
};

