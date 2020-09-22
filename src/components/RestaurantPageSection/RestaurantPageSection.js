import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantPageSection.scss';
import { CardList } from '../CardList/CardList';

export const RestaurantPageSection = ({ sections }) => (
  <div
    className="restaurant-page__menu-item"
  >
    {sections.map(section => (
      (
        <section
          key={section.uuid}
          id={section.title}
        >
          <div
            className="restaurant-page__section-item-title"
          >
            <h2>{section.title}</h2>

          </div>
          <CardList
            cardInfo={section.itemUuids.map(itemCardUuids => ({
              title: section.entitiesMap[itemCardUuids].title,
              description: section.entitiesMap[itemCardUuids].description,
              price: section.entitiesMap[itemCardUuids].price,
              imageUrl: section.entitiesMap[itemCardUuids].imageUrl,
              uuid: section.entitiesMap[itemCardUuids].uuid,
            }))}
          />
        </section>
      )
    ))}
  </div>
);
RestaurantPageSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      itemUuids: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      entitiesMap: PropTypes.shape(PropTypes.shape({
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }).isRequired).isRequired,
    }).isRequired
  ).isRequired,
};
