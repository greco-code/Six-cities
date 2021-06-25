import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {comments} from '../mocks/comments';

const initialState = {
  city: 'Paris',
  offers,
  comments,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default (reducer);
