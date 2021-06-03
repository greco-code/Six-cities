import React from 'react';

import Hero from '../hero/hero';
import PropTypes from 'prop-types';


function App(props) {
  const {pointsAmount} = props;

  return (
    <Hero pointsAmount={pointsAmount}/>
  );
}

App.propTypes = {
  pointsAmount: PropTypes.number.isRequired,
};

export default App;
