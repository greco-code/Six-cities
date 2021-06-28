import React from 'react';
import PropTypes from 'prop-types';
import cityProp from '../../props/city.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

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

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    dispatch(ActionCreator.changeCity(evt.target.textContent));
  },
});

export {City};
export default connect(null, mapDispatchToProps)(City);
