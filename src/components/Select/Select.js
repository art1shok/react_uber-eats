import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';
import arrowDown from '../../assets/images/arrow-down.svg';

export const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }, index) => (
          // eslint-disable-next-line
          <option className="select__option" key={index} value={optionValue} selected={value === optionValue}>
            {label}
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img src={iconUrl} alt="select icon" className="select__icon" />
      )}
      <img
        src={arrowDown}
        alt="arrow down"
        className="select__arrow"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

Select.defaultProps = {
  onSelect: () => {},
  options: [],
  iconUrl: '',
};
