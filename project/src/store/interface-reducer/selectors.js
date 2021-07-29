import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.INTERFACE].city;
export const getSortType = (state) => state[NameSpace.INTERFACE].sortType;
export const getHoveredOffer = (state) => state[NameSpace.INTERFACE].hoveredOffer;
export const getSortStatus = (state) => state[NameSpace.INTERFACE].isSortOpened;
