import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'changeCity',
  CHANGE_SORT: 'changeSort',
  SELECT_OFFER: 'selectOffer',
  UNSELECT_OFFER: 'unselectOffer',
  TOGGLE_SORT: 'toggleSort',
  LOAD_OFFERS: 'loadOffers',
  LOAD_COMMENTS: 'loadComments',
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  LOGOUT: 'logout',
  CHANGE_OFFERS_LOADING_STATUS: 'changeOffersLoadingStatus',
  CHANGE_OFFER_LOADING_STATUS: 'changeOfferLoadingStatus',
  SAVE_LOGIN: 'saveLogin',
  REMOVE_LOGIN: 'removeLogin',
  REDIRECT: 'redirect',
  LOAD_OFFER: 'loadOffer',
  LOAD_NEARBY: 'loadNearby',
  LOAD_FAVORITES: 'loadFavorites',
  ADD_COMMENT: 'addComment',
  ADD_RATING: 'addRating',
  CHANGE_COMMENT_SENDING_STATUS: 'changeCommentSendingStatus',
  ADD_FAVORITE_OFFER: 'addFavoriteOffer',
  TOGGLE_COMMENT_SENDING_STATUS: 'toggleCommentSendingStatus',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));

export const selectOffer = createAction(ActionType.SELECT_OFFER, (offer) => ({
  payload: offer,
}));

export const unselectOffer = createAction(ActionType.UNSELECT_OFFER, (offer) => ({
  payload: offer,
}));

export const toggleSort = createAction(ActionType.TOGGLE_SORT, (bool) => ({
  payload: !bool,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadNearby = createAction(ActionType.LOAD_NEARBY, (offers) => ({
  payload: offers,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (offers) => ({
  payload: offers,
}));

export const addFavoriteOffer = createAction(ActionType.ADD_FAVORITE_OFFER, (offer) => ({
  payload: offer,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const addComment = createAction(ActionType.ADD_COMMENT, (comment) => ({
  payload: comment,
}));

export const addRating = createAction(ActionType.ADD_RATING, (rating) => ({
  payload: rating,
}));

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const changeOffersLoadingStatus = createAction(ActionType.CHANGE_OFFERS_LOADING_STATUS, (status) => ({
  payload: status,
}));

export const changeOfferLoadingStatus = createAction(ActionType.CHANGE_OFFER_LOADING_STATUS, (status) => ({
  payload: status,
}));

export const changeCommentSendingStatus = createAction(ActionType.CHANGE_COMMENT_SENDING_STATUS, (status) => ({
  payload: status,
}));

export const saveLogin = createAction(ActionType.SAVE_LOGIN, (login) => ({
  payload: login,
}));

export const logout = createAction(ActionType.LOGOUT);

export const removeLogin = createAction(ActionType.REMOVE_LOGIN, () => ({
  payload: '',
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url,
}));
