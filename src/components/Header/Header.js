import React, { Component } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import place from '../../assets/images/place.svg';
import searchicon from '../../assets/images/searchicon.svg';
import close from '../../assets/images/close.svg';

import { Input } from '../Input/Input';

export class Header extends Component {
  headerButtons = [
    {
      src: place, alt: 'place icon',
    },
    {
      src: searchicon, alt: 'search icon',
    },
  ]

  elementRef = React.createRef();

  state ={
    address: '',
    time: '',
    search: '',
    selectedButton: null,
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    const { current } = this.elementRef;

    if (this.state.selectedButton !== null
      && current
      && !current.contains(event.target)
    ) {
      this.setState({
        selectedButton: null,
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  headerButtonClick = (index = null) => {
    if (this.state.selectedButton === index) {
      this.setState({ selectedButton: null });
    } else {
      this.setState({
        selectedButton: index,
      });
    }
  }

  renderHeaderButtons = () => (
    <div className="header__toggle-buttons">
      {this.headerButtons.map(({ src, alt }, index) => {
        const activeClassName = index === this.state.selectedButton
          ? 'header__toggle-btn--active'
          : '';

        return (
          // because index is never changes
          /* eslint-disable react/no-array-index-key */
          <button
            key={index}
            onClick={() => this.headerButtonClick(index)}
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
  )

  render() {
    const {
      address,
      time,
      search,
      selectedButton,
    } = this.state;

    return (
      <header className="header">
        <div
          className="content"
          ref={this.elementRef}
        >
          <div className="header__inner">
            <Link to="/">
              <img
                className="header__logo"
                src={logo}
                alt="Uber Eats"
              />
            </Link>
            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                onChange={this.handleChange}
                placeholder="Address"
                iconUrl={place}
              />
              <Input
                name="time"
                value={time}
                onChange={this.handleChange}
                placeholder="Time"
                type="time"
              />
            </div>

            <div className="header__search">
              <Input
                name="search"
                value={search}
                onChange={this.handleChange}
                placeholder="Search"
                iconUrl={searchicon}
              />
            </div>

            {this.renderHeaderButtons()}

            <Link
              className="header__link"
              to="/sign-in"
            >
            Sign In
            </Link>

          </div>
          {(selectedButton === 0 || selectedButton === 1) && (
            <div
              className="header__mobile-controls mobile-controls"
            >
              {selectedButton === 0 && (
              <>
                <Input
                  label="Where"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                  placeholder="Address"
                  iconUrl={place}
                  isSmall={false}
                />
                <Input
                  label="To"
                  name="time"
                  value={time}
                  onChange={this.handleChange}
                  placeholder="Time"
                  type="time"
                  isSmall={false}
                />
              </>
              )}
              {selectedButton === 1 && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  onChange={this.handleChange}
                  placeholder="Search"
                  iconUrl={searchicon}
                  isSmall={false}
                />
              )}
              <button
                onClick={() => this.headerButtonClick()}
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
  }
}
