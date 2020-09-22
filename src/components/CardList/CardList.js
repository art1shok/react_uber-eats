import React/* { useState } */ from 'react';
import PropTypes from 'prop-types';
import './CardList.scss';
// import { ModalWindow } from '../ModalWindow/ModalWindow';

// eslint-disable-next-line consistent-return
const cutText = (string, value) => {
  if (string) {
    if (string.length <= value) {
      return string;
    }

    return `${string.substring(0, value - 1)}...`;
  }
};

export const CardList = ({ cardInfo }) => (
  <div className="card-list">
    {cardInfo.map(card => (
      <div
        className="card-list__item"
        key={card.uuid}
      >
        <div className="card-list__left-section">
          <h3 className="card-list__title">
            {card.imageUrl ? cutText(card.title, 20) : card.title}
          </h3>
          <p className="card-list__description">
            {card.imageUrl ? cutText(card.description, 45) : card.description}
          </p>
          <p className="card-list__price">
            {`£ ${card.price / 100}`}
          </p>

        </div>

        {card.imageUrl && (
          <div className="card-list__right-section">
            <img
              className="card-list__img"
              src={card.imageUrl}
              alt={card.title}
            />
          </div>
        )}
      </div>
    ))}
    {/* <ModalWindow */}
    {/*  isOpened={isOpened} */}
    {/*  onClose={() => setIsOpened(false)} */}
    {/* /> */}
  </div>
);
CardList.propTypes = {
  cardInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string,
      uuid: PropTypes.string.isRequired,
    }).isRequired
  ),
};

CardList.defaultProps = {
  cardInfo: {
    imageUrl: '',
  },
};
