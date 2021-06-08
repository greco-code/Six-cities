import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ListSettings} from './settings';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';

ReactDOM.render(
  <React.StrictMode>
    <App
      pointsAmount={ListSettings.POINTS_AMOUNT}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);


