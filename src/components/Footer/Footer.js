import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.svg';
import world from '../../assets/images/world.svg';
import googlePlay from '../../assets/images/google-play.png';
import appStore from '../../assets/images/app-store.png';

import fb from '../../assets/images/fb.svg';
import tw from '../../assets/images/tw.svg';
import ig from '../../assets/images/ig.svg';
import { Select } from '../Select/Select';

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

            <Select
              name="language"
              options={[
                {
                  value: 'en', label: 'English',
                },
                {
                  value: 'ua', label: 'Ukrainian',
                },
              ]}
              value="en"
              iconUrl={world}
            />
          </div>

          <div className="footer__mobile-apps">
            <Link
              className="footer__mobile-app"
              to="#"
            >
              <img
                src={appStore}
                alt="Google Play"
                className="footer__mobile-app"
              />
            </Link>
            <Link
              className="footer__mobile-app"
              to="#"
            >
              <img
                src={googlePlay}
                alt="App Store"
                className="footer__mobile-app"
              />
            </Link>
          </div>
        </div>

        <div className="footer__top-links links">
          <Link to="#" className="links__link links__link--intended">
            About UberEats
          </Link>
          <Link to="#" className="links__link">
            Read our blog
          </Link>
          <Link to="#" className="links__link">
            Sign up to deliver
          </Link>
          <Link to="#" className="links__link">
            Add your restaurant
          </Link>

        </div>
        <div className="footer__top-links">
          <Link to="#" className="links__link links__link--intended">
            Get help
          </Link>
          <Link to="#" className="links__link">
            Read FAQs
          </Link>
          <Link to="#" className="links__link">
            View all cities
          </Link>

        </div>
      </div>
      <div className="footer__bottom-part">
        <p className="footer__copyright">
          © 2019 Uber Technologies Inc.
        </p>
        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <Link to="#" className="links__link">
              Privacy policy
            </Link>
            <Link to="#" className="links__link">
              Terms of use
            </Link>
            <Link to="#" className="links__link">
              Pricing
            </Link>
          </div>
          <div className="footer__social social">
            <Link to="#" className="social__link">
              <img src={fb} alt="facebook" className="" />
            </Link>
            <Link to="#" className="social__link">
              <img src={tw} alt="twitter" className="" />
            </Link>
            <Link to="#" className="social__link">
              <img src={ig} alt="instagram" className="" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  </footer>
);
