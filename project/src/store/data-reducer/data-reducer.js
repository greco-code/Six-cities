import {createReducer} from '@reduxjs/toolkit';
import {changeCommentSendingStatus, changeOfferLoadingStatus, changeOffersLoadingStatus, loadComments, loadFavorites, loadNearby, loadOffer, loadOffers} from '../action';
import {defaultOffer} from '../../utils';

const initialState = {
  offers: [],
  selectedOffer: defaultOffer,
  comments: [],
  nearbyOffers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  isOfferLoaded: false,
  isCommentSend: false,
};

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
    .addCase(changeOffersLoadingStatus, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(changeOfferLoadingStatus, (state, action) => {
      state.isOfferLoaded = action.payload;
    })
    .addCase(changeCommentSendingStatus, (state, action) => {
      state.isCommentSend = action.payload;
    });
});

export {dataReducer};
