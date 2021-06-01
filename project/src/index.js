import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  POINTS_AMOUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      pointsAmount={Setting.POINTS_AMOUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
