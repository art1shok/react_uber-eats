import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';
import { Link } from 'react-router-dom';

export const RestaurantCard
  = ({ imageUrl, categories, title, etaRange, uuid }) => (
    <Link to={`/restaurant/${uuid}`}>
      <div
        className="restaurant-card"
      >
        <img
          src={imageUrl}
          alt={`restaurant_${title}`}
          className="restaurant-card__img"
        />
        <h2
          className="restaurant-card__title"
        >
          {title}
        </h2>
        <div className="restaurant-card__categories">
          {categories.join(' • ')}
        </div>
        <div className="restaurant-card__time">
          {etaRange.replace(/–/, ' - ')}
        </div>
      </div>
    </Link>
  );

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
