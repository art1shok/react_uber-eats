import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';

import './RestaurantsListPage.scss';
import { Loader } from '../Loader/Loader';
import Error from '../Error/Error';

const DEFAULT_ETA_RANGE = '20-30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const {
      isLoading,
      loadRestaurants,
    } = this.props;

    if (!isLoading) {
      loadRestaurants();
    }
  }

  render() {
    const {
      restaurantsData,
      error,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <div className="restaurant-list">
        {restaurantsData.map((restaurant) => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange,
          } = restaurant;

          return (
            <div
              className="content"
              key={uuid}
            >

              <RestaurantCard
                key={uuid}
                uuid={uuid}
                title={title}
                imageUrl={heroImageUrl}
                categories={categories}
                etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsData: Proptypes.arrayOf(Proptypes.shape({})),
  loadRestaurants: Proptypes.func.isRequired,
  error: Proptypes.string,
  isLoading: Proptypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
