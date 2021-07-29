import React from 'react';
import PropType, {string} from 'prop-types';

function GoodsList(props) {
  const {goods} = props;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good) => (
          <li key={good} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

GoodsList.propTypes = {
  goods: PropType.arrayOf(string).isRequired,
};

export default GoodsList;
