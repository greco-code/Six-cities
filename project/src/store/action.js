export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
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
};

