import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSort, selectOffer, toggleSort, unselectOffer} from '../action';
import {SortType} from '../../const';

const initialState = {
  city: 'Paris',
  sortType: SortType.POPULAR,
  hoveredOffer: null,
  isSortOpened: false,
};

const interfaceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.isSortOpened = false;
      state.sortType = SortType.POPULAR;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(unselectOffer, (state, action) => {
      state.hoveredOffer = action.payload;
    })
    .addCase(toggleSort, (state, action) => {
      state.isSortOpened = action.payload;
    });
});

export {interfaceReducer};
