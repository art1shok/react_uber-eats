import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';
import { useHistory } from 'react-router-dom';

export const RestaurantCard = (props) => {
  const {
    imageUrl,
    categories,
    title,
    etaRange,
    uuid,
  } = props;

  const history = useHistory();
  const handleClick = () => {
    history.push(`restaurant/${uuid}`);
  };

  return (
    <div className="restaurant-card">
      <img
        src={imageUrl}
        alt={title}
        className="restaurant-card__img"
        onClick={handleClick}
      />
      <h2>
        {title}
      </h2>
      <div className="restaurant-card__categories">
        {categories.join(' • ')}
      </div>
      <div className="restaurant-card__eta">
        {etaRange}
      </div>
      {title}
    </div>
  );
};

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
  uuid: PropTypes.string.isRequired,
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
};
