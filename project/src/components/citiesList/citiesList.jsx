import React from 'react';
import City from '../city/city';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';

function CitiesList(props) {
  const {cities, currentCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <City city={city} currentCity={currentCity} key={city.id}/>)}
    </ul>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityProp),
  currentCity: PropTypes.string.isRequired,
};

export default CitiesList;
