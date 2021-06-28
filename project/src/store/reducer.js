import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {comments} from '../mocks/comments';
import {SortType} from '../const';

const initialState = {
  city: 'Paris',
  offers,
  comments,
  sortType: SortType.POPULAR,
  currentOffer: null,
  isSortOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        isSortOpened: false,
        sortType: SortType.POPULAR,
      };
    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.SELECT_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.UNSELECT_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.TOGGLE_SORT:
      return {
        ...state,
        isSortOpened: action.payload,
      };
    default:
      return state;
  }
};

export default (reducer);
