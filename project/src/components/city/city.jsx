import React from 'react';
import {useDispatch} from 'react-redux';
import {changeCity} from '../../store/action';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';
import {Link} from 'react-router-dom';


function City(props) {
  const {city, currentCity} = props;

  const dispatch = useDispatch();

  const onCityChange = (targetCity) => {
    dispatch(changeCity(targetCity));
  };

  return (
    <li className="locations__item" onClick={(evt) => onCityChange(evt.target.textContent)}>
      <Link className={currentCity === city.city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}>
        <span>{city.city}</span>
      </Link>
    </li>
  );
}

City.propTypes = {
  city: cityProp,
  currentCity: PropTypes.string.isRequired,
};

export default City;
