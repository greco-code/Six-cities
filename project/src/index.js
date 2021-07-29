import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './sevices/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store/root-reducer';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


