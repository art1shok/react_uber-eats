import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantsList,
  selectIsLoading,
  selectRestaurantsListError,
} from '../../store/selectors';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader/Loader';
import Error from '../Error/Error';
import { loadRestaurants } from '../../store/actions';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import Pagination from '../Pagination/Pagination';

const RestaurantsListPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const restaurantsData = useSelector(selectRestaurantsList);
  const error = useSelector(selectRestaurantsListError);
  const dispatch = useDispatch();
  const [restaurantsPerPage, setRestaurantPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurantsData
    .slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setRestaurantPerPage(12);
    dispatch(loadRestaurants());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <div className="restaurant-list content">
        {currentRestaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.uuid}
            uuid={restaurant.uuid}
            title={restaurant.title}
            imageUrl={restaurant.heroImageUrl}
            categories={restaurant.categories}
            etaRange={restaurant.etaRange.text}
          />
        ))}
      </div>
      <Pagination
        restaurantsPerPage={restaurantsPerPage}
        totalRestaurants={restaurantsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default RestaurantsListPage;
