import {offers} from '../mocks/offers';
import {ActionType} from './action';
import {getOffersList} from '../utils';

const initialState = {
  city: 'Paris',
  offersList: getOffersList(offers, 'Paris'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offersList: getOffersList(offers, action.payload),
      };
    default:
      return state;
  }
};

export default (reducer);
