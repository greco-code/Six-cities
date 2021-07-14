import {ActionType} from './action';
import {AuthorizationStatus, SortType} from '../const';
import {defaultOffer} from '../utils';


const initialState = {
  city: 'Paris',
  offers: [],
  comments: [],
  sortType: SortType.POPULAR,
  hoveredOffer: null,
  selectedOffer: defaultOffer,
  nearbyOffers: [],
  isSortOpened: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isOffersLoaded: false,
  isOfferLoaded: false,
  login: '',
  isCommentSend: false,
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
        hoveredOffer: action.payload,
      };
    case ActionType.UNSELECT_OFFER:
      return {
        ...state,
        hoveredOffer: action.payload,
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
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        selectedOffer: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    // case ActionType.ADD_COMMENT:
    //   return {
    //     ...state,
    //     newComment: {
    //       comment: action.payload,
    //     }
    //   }
    // case ActionType.ADD_RATING:
    //   return {
    //     ...state,
    //     newComment: {
    //       rating: action.payload,
    //     }
    //   }
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearbyOffers: action.payload,
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
    case ActionType.CHANGE_OFFERS_LOADING_STATUS:
      return {
        ...state,
        isOffersLoaded: action.payload,
      };
    case ActionType.CHANGE_OFFER_LOADING_STATUS:
      return {
        ...state,
        isOfferLoaded: action.payload,
      };
    case ActionType.CHANGE_COMMENT_SENDING_STATUS:
      return {
        ...state,
        isCommentSend: action.payload,
      };
    case ActionType.SAVE_LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case ActionType.REMOVE_LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    default:
      return state;
  }
};

export default (reducer);
