import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination
  = ({ totalRestaurants, restaurantsPerPage, paginate, currentPage }) => {
    const pageNumbers = [];

    const pagesCount = Math.ceil(totalRestaurants / restaurantsPerPage);

    for (let i = 1; i <= pagesCount; i += 1) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(pageNumber => (
            <li
              key={pageNumber}
              className="pagination__item"
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(
                    {
                      top: 0,
                      behavior: 'smooth',
                    }
                  );

                  return paginate(pageNumber);
                }}
                href="/#"
                className={pageNumber === currentPage
                  ? 'pagination__link pagination__active'
                  : 'pagination__link'}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number,
  totalRestaurants: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  restaurantsPerPage: null,
  totalRestaurants: null,
  paginate: null,
  currentPage: 1,
};

export default Pagination;
