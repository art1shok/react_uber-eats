import React, { useRef, useEffect, useState } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import place from '../../assets/images/place.svg';
import searchIcon from '../../assets/images/searchicon.svg';
import close from '../../assets/images/close.svg';

import { Input } from '../Input/Input';
import { saveQuery } from '../../store/actions';

export const Header = () => {
  const elementRef = useRef();
  const [info, setInfo] = useState({
    address: '',
    time: '',
    search: '',
    selectedButton: null,
  });
  const dispatch = useDispatch();

  // const handleClickOutside = (event) => {
  //   const { current } = elementRef;
  //
  //   if ((current
  //     && !current.contains(event.target))
  //     || info.selectedButton !== null
  //
  //   ) {
  //     setInfo({
  //       selectedButton: null,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(saveQuery(info.search));
  }, [dispatch, info.search]);

  const headerButtons = [
    {
      src: place, alt: 'place icon',
    },
    {
      src: searchIcon, alt: 'search icon',
    },
  ];
  const handleChange = ({ target }) => {
    setInfo({
      [target.name]: target.value,
    });
  };

  const headerButtonClick = (index = null) => {
    if (info.selectedButton === index) {
      setInfo({
        selectedButton: null,
      });
    } else {
      setInfo({
        selectedButton: index,
      });
    }
  };

  const renderHeaderButtons = () => (
    <div className="header__toggle-buttons">
      {headerButtons.map(({ src, alt }, index) => {
        const activeClassName = index === info.selectedButton
          ? 'header__toggle-btn--active'
          : '';

        return (
          // because index is never changes
          /* eslint-disable react/no-array-index-key */
          <button
            key={index}
            onClick={() => headerButtonClick(index)}
            type="button"
            className={`header__toggle-btn ${activeClassName}`}
          >
            <img
              src={src}
              alt={alt}
            />
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="header">
      <div
        className="content"
        ref={elementRef}
      >
        <div className="header__inner">
          <Link to="/react_uber-eats/">
            <img
              className="header__logo"
              src={logo}
              alt="Uber Eats"
            />
          </Link>
          <div className="header__delivery-info">
            <Input
              name="address"
              value={info.address}
              onChange={handleChange}
              placeholder="Address"
              iconUrl={place}
            />
            <Input
              name="time"
              value={info.time}
              onChange={handleChange}
              placeholder="Time"
              type="time"
            />
          </div>

          <div className="header__search">
            <Input
              name="search"
              value={info.search}
              onChange={handleChange}
              placeholder="Search"
              iconUrl={searchIcon}
            />
          </div>

          {renderHeaderButtons()}

          <Link
            className="header__link"
            to="/sign-in"
          >
            Sign In
          </Link>

        </div>
        {(info.selectedButton === 0 || info.selectedButton === 1) && (
          <div
            className="header__mobile-controls mobile-controls"
          >
            {info.selectedButton === 0 && (
              <>
                <Input
                  label="Where"
                  name="address"
                  value={info.address}
                  onChange={handleChange}
                  placeholder="Address"
                  iconUrl={place}
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="time"
                  value={info.time}
                  onChange={handleChange}
                  placeholder="Time"
                  type="time"
                  isSmall={false}
                />
              </>
            )}
            {info.selectedButton === 1 && (
              <Input
                label="Find"
                name="search"
                value={info.search}
                onChange={handleChange}
                placeholder="Search"
                iconUrl={searchIcon}
                isSmall={false}
              />
            )}
            <button
              onClick={() => headerButtonClick()}
              type="button"
              className="mobile-controls__close"
            >
              <img
                src={close}
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
