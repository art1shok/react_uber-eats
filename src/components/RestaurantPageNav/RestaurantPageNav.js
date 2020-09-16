import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantPageNav.scss';

export const RestaurantPageNav = ({ sections }) => (
  <nav className="restaurant-page__nav-wrapper">
    <ul className="restaurant-page__nav">
      {
        sections.map(({ uuid, title }) => (
          <li key={uuid}>
            <button
              type="button"
              className="restaurant-page__nav-link"
            >
              {title}
            </button>
          </li>
        ))
      }
    </ul>
  </nav>

);

RestaurantPageNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
