import {ActionType} from './action';
import {AuthorizationStatus, SortType} from '../const';
import {comments} from '../mocks/comments';

const initialState = {
  city: 'Paris',
  offers: [],
  comments: comments,
  sortType: SortType.POPULAR,
  currentOffer: null,
  isSortOpened: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export default (reducer);
