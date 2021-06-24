import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {comments} from '../mocks/comments';
import {SortType} from '../const';

const initialState = {
  city: 'Paris',
  offers,
  comments,
  sortType: SortType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export default (reducer);
