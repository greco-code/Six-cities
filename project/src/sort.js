import {SortType} from './const';

export const sort = (sortType, offers) => {
  switch (sortType) {
    case SortType.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED_FIRST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
