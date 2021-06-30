import React from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


function City(props) {
  const {city, currentCity, changeCity} = props;

  return (
    <li className="locations__item" onClick={(evt) => changeCity(evt.target.textContent)}>
      <a className={currentCity === city.city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
        <span>{city.city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: cityProp,
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  changeCity: ActionCreator.changeCity,
};

export {City};
export default connect(null, mapDispatchToProps)(City);
