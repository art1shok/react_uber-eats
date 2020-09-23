import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({
  pagesCount, paginate, currentPage,
}) => {
  const pageNumbers = [];
  const lastPage = pagesCount - 1;

  const delta = 2;
  const maxDelta = delta * 2;
  let leftNumber = currentPage - delta;
  let rightNumber = currentPage + delta;

  if (lastPage >= maxDelta) {
    if (currentPage < delta) {
      rightNumber = maxDelta;
    }

    if (currentPage > lastPage - delta) {
      leftNumber = lastPage - maxDelta;
    }
  }

  for (let i = 0; i <= lastPage; i += 1) {
    if (i >= leftNumber && i <= rightNumber) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
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
                  },
                );

                return paginate(pageNumber);
              }}
              href="/#"
              className={pageNumber === currentPage
                ? 'pagination__link pagination__active'
                : 'pagination__link'}
            >
              {pageNumber + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  pagesCount: null,
  paginate: null,
  currentPage: 1,
};

export default Pagination;
