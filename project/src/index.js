import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ListSettings} from './settings';

ReactDOM.render(
  <React.StrictMode>
    <App
      pointsAmount={ListSettings.POINTS_AMOUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
