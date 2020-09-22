import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './RestaurantPageNav.scss';

export const RestaurantPageNav = ({ sections }) => {
  const ref = useRef();

  return (
    <nav
      className="restaurant-page__nav-wrapper"
    >
      <ul className="restaurant-page__nav">
        {
          sections.map(({ uuid, title }) => (
            <li
              key={uuid}
              ref={ref}
            >
              <Link
                to={title}
                className="restaurant-page__nav-link"
                activeClass="restaurant-page__nav-link--active"
                spy
                smooth
                offset={-120}
                duration={300}
              >
                {title}
              </Link>
            </li>

          ))
        }
      </ul>
    </nav>

  );
};

// Сделать query selector по классу,
// сделать скролл внутри секции к центру по этому классу
RestaurantPageNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
