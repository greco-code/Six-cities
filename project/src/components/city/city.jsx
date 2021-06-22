import React from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';

function City(props) {
  const {city, currentCity, onCityChange} = props;

  return (
    <li className="locations__item" onClick={onCityChange}>
      <a className={currentCity === city.city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
        <span>{city.city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: cityProp,
  currentCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default City;
