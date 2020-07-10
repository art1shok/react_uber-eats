import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';
import { Link } from 'react-router-dom';

const Error = (props) => {
  const { message } = props;

  return (
    <div className="error">
      <p>
        {message}
      </p>
      <Link href="/" className="error__link">
        Go to Home
      </Link>
    </div>
  );
};
// commit

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong',
};

export default Error;
