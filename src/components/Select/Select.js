import React, { useState } from 'react';
import PropTypes from 'prop-types';
import world from '../../assets/images/world.svg';

import './Select.scss';

function Select({ title: initialTitle, options }) {
  const [isOpened, setOpened] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const toggle = () => setOpened(!isOpened);

  const handleChooseOption = (value) => {
    setTitle(value);
    setOpened(false);
  };

  return (
    <div
      className="select"
      role="button"
      onClick={() => toggle(!isOpened)}
    >
      <div className="select__header">
        <img src={world} alt="" className="select__icon" />
        <p className="dd-header__title--bold">{title}</p>
        <div
          className={`select__arrow ${isOpened ? 'select__arrow--opened' : ''}`}
        />
      </div>
      <div className="select__body">
        {isOpened
            && options.map(item => (
              <div
                className="options__option"
                key={item.id}
                role="button"
                onClick={() => handleChooseOption(item.value)}
              >
                <span>{item.value}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Select;

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};
