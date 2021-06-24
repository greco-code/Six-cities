export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
};

export const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
  changeSort: (evt) => ({
    type: ActionType.CHANGE_SORT,
    payload: evt.target.textContent,
  }),
};

