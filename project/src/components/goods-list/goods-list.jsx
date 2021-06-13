import React from 'react';
import PropType, {string} from 'prop-types';

function GoodsList(props) {
  const {goods} = props;

  return (
    goods.map((good, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index} className="property__inside-item">
        {good}
      </li>
    ))
  );
}

GoodsList.propTypes = {
  goods: PropType.arrayOf(string).isRequired,
};

export default GoodsList;
