import {createReducer} from '@reduxjs/toolkit';
import {
  addFavoriteOffer,
  changeCommentSendingStatus,
  changeFavoritesLoadingStatus,
  changeOfferLoadingStatus,
  changeOffersLoadingStatus,
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers
} from '../action';
import {defaultOffer} from '../../utils';
import {COMMENT_SENDING_STATUS, FAVORITES_LOADING_STATUS, OFFER_LOADING_STATUS, OFFERS_LOADING_STATUS} from '../../const';

const initialState = {
  offers: [],
  selectedOffer: defaultOffer,
  comments: [],
  nearbyOffers: [],
  favoriteOffers: [],
  favoritesLoadingStatus: FAVORITES_LOADING_STATUS.NOT_LOADED,
  offersLoadingStatus: OFFERS_LOADING_STATUS.NOT_LOADED,
  offerLoadingStatus: OFFER_LOADING_STATUS.NOT_LOADED,
  commentSendingStatus: COMMENT_SENDING_STATUS.NOT_SENT,
};

export const ITEMS_TO_REMOVE = 1;

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(addFavoriteOffer, (state, action) => {
      if (action.payload.id === state.selectedOffer.id) {
        state.selectedOffer.isFavorite = action.payload.isFavorite;
      }

      const index = state.favoriteOffers.findIndex((item) => item.id === action.payload.id);
      state.favoriteOffers.splice(index, ITEMS_TO_REMOVE);

      if (state.nearbyOffers.some((item) => item.id === action.payload.id)) {
        state.nearbyOffers.find((item) => item.id === action.payload.id).isFavorite =
          action.payload.isFavorite;
      }

      if (state.offers.some((item) => item.id === action.payload.id)) {
        state.offers.find((item) => item.id === action.payload.id).isFavorite =
          action.payload.isFavorite;
      }
      state.favoriteOffers = [...state.favoriteOffers, action.payload];
    })
    .addCase(changeOffersLoadingStatus, (state, action) => {
      state.offersLoadingStatus = action.payload;
    })
    .addCase(changeOfferLoadingStatus, (state, action) => {
      state.offerLoadingStatus = action.payload;
    })
    .addCase(changeCommentSendingStatus, (state, action) => {
      state.commentSendingStatus = action.payload;
    })
    .addCase(changeFavoritesLoadingStatus, (state, action) => {
      state.favoritesLoadingStatus = action.payload;
    });
});

export {dataReducer};
