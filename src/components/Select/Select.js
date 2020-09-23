import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import world from '../../assets/images/world.svg';

import './Select.scss';

function Select({ title: initialTitle, options }) {
  const [isOpened, setOpened] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const selectRef = useRef();

  const handleChooseOption = (value) => {
    setTitle(value);
    setOpened(false);
  };

  const handleClickOutside = (event) => {
    const { current } = selectRef;

    if (current
      && !current.contains(event.target)
    ) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className="select"
      role="button"
      ref={selectRef}
    >
      <div
        className="select__header"
        role="button"
        tabIndex={0}
        onClick={() => setOpened((prevState) => !prevState)}
        aria-hidden="true"
      >
        <img src={world} alt="" className="select__icon" />
        <p className="dd-header__title--bold">{title}</p>
        <div
          className={`select__arrow ${isOpened ? 'select__arrow--opened' : ''}`}
        />
      </div>
      {isOpened && (
        <div className="select__body">
          {options.map((item) => (
            <div
              className="select__option"
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleChooseOption(item.value)}
              aria-hidden="true"
            >
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
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
