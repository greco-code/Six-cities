import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].selectedOffer;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getOffersLoadingStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferLoaded;
export const getCommentSendingStatus = (state) => state[NameSpace.DATA].isCommentSend;
