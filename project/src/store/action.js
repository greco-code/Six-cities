export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
  SELECT_OFFER: 'selectOffer',
  UNSELECT_OFFER: 'unselectOffer',
};

export const ActionCreator = {
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload,
  }),
  changeSort: (payload) => ({
    type: ActionType.CHANGE_SORT,
    payload,
  }),
  selectOffer: (payload) => ({
    type: ActionType.SELECT_OFFER,
    payload,
  }),
  unselectOffer: () => ({
    type: ActionType.UNSELECT_OFFER,
    payload: null,
  }),
};

