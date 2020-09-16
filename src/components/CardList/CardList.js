import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardList.scss';
import { ModalWindow } from '../ModalWindow/ModalWindow';

const cutDescription = (string) => {
  if (string) {
    if (string.length <= 60) {
      return string;
    }

    return `${string.substring(0, 59)}...`;
  }
};

export const CardList = ({ cardInfo }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="card-list">
      {cardInfo.map(card => (
        <div
          className="card-list__item"
          key={card.uuid}
          onClick={() => setIsOpened(true)}
        >
          <div className="card-list__left-section">
            <h3 className="card-list__title">
              {card.title}
            </h3>
            <p className="card-list__description">
              {cutDescription(card.description)}
            </p>
            <p className="card-list__price">
              {`£ ${card.price}`}
            </p>

          </div>

          <div className="card-list__right-section">
            <img
              className="card-list__img"
              src={card.imageUrl}
              alt={card.title}
            />
          </div>
        </div>
      ))}
      <ModalWindow
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </div>
  );
};

CardList.propTypes = {
  cardInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
