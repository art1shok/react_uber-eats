import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.svg';
import world from '../../assets/images/world.svg';

import fb from '../../assets/images/fb.svg';
import tw from '../../assets/images/tw.svg';
import ig from '../../assets/images/ig.svg';
import Select from '../Select/Select';

const google = 'https://play.google.com/store/'
  + 'apps/details?id=com.ubercab.eats&hl=ru';

const appStore = 'https://apps.apple.com/us/app/'
  + 'uber-eats-food-delivery/id1058959277';

const items = [
  {
    id: 1,
    value: 'English',
  },
  {
    id: 2,
    value: 'Ukrainian',
  },
];

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">

            <img
              className="footer__logo"
              src={logoWhite}
              alt="Uber Eats"
            />
            <Select title="English" options={items} iconUrl={world} />

          </div>

          <div className="footer__mobile-apps">
            <a
              className="footer__mobile-app"
              href={appStore}
            >
              <div
                className="footer__app-store"
              />
            </a>

            <a
              className="footer__mobile-app"
              href={google}
            >
              <div
                className="footer__google-play"
              />
            </a>
          </div>

        </div>

        <div className="footer__top-links links">
          <Link to="/#" className="links__link links__link--intended">
            About UberEats
          </Link>
          <Link to="/#" className="links__link">
            Read our blog
          </Link>
          <Link to="/#" className="links__link">
            Sign up to deliver
          </Link>
          <Link to="/#" className="links__link">
            Add your restaurant
          </Link>
        </div>

        <div className="footer__top-links">
          <Link to="/#" className="links__link links__link--intended">
            Get help
          </Link>
          <Link to="/#" className="links__link">
            Read FAQs
          </Link>
          <Link to="/#" className="links__link">
            View all cities
          </Link>
        </div>
      </div>

      <div className="footer__bottom-part">
        <p className="footer__copyright">
          © 2020 Uber Technologies Inc.
        </p>
        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <Link to="/#" className="links__link">
              Privacy policy
            </Link>
            <Link to="/#" className="links__link">
              Terms of use
            </Link>
            <Link to="/#" className="links__link">
              Pricing
            </Link>
          </div>

          <div className="footer__social social">
            <a
              href="https://www.facebook.com/UberEats/"
              className="social__link"
            >
              <img src={fb} alt="facebook" className="social__facebook" />
            </a>
            <a
              href="https://twitter.com/ubereats"
              className="social__link"
            >
              <img src={tw} alt="twitter" className="social__twitter" />
            </a>
            <a
              href="https://www.instagram.com/ubereats/"
              className="social__link"
            >
              <img src={ig} alt="instagram" className="social__twitter" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </footer>
);
