export const ActionType = {
  CHANGE_CITY: 'changeCity',
};

export const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
};

