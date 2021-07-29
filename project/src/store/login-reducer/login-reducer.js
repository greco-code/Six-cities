import {createReducer} from '@reduxjs/toolkit';
import {removeLogin, requireAuthorization, saveLogin} from '../action';
import {AuthorizationStatus} from '../../const';
import {logout} from '../api-actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  login: '',
};

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(saveLogin, (state, action) => {
      state.login = action.payload;
    })
    .addCase(removeLogin, (state, action) => {
      state.login = action.payload;
    });
});

export {loginReducer};
