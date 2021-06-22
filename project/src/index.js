import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';
import reducer from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


