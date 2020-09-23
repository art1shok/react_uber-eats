import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantsList,
  selectIsLoading,
  selectRestaurantsListError,
  selectQueryString,
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
  const query = useSelector(selectQueryString);
  const dispatch = useDispatch();
  const [restaurantsPerPage, setRestaurantPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1280) {
      setRestaurantPerPage(9);
      if (window.innerWidth <= 768) {
        setRestaurantPerPage(4);
      }
    }

    dispatch(loadRestaurants());
  }, [dispatch]);

  const firstRestaurantIndex = useMemo(() => restaurantsPerPage * currentPage, [
    currentPage,
    restaurantsPerPage,
  ]);

  const lastRestaurantIndex = useMemo(
    () => firstRestaurantIndex + restaurantsPerPage,
    [firstRestaurantIndex, restaurantsPerPage],
  );

  const restaurantsList = useMemo(() => {
    if (query) {
      return restaurantsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()));
    }

    return restaurantsData;
  }, [query, restaurantsData]);

  const pagesCount = Math.ceil(restaurantsList.length / restaurantsPerPage);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <div className="restaurant-list content">
        {restaurantsList
          .slice(firstRestaurantIndex, lastRestaurantIndex)
          .map((restaurant) => (
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
        pagesCount={pagesCount}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default RestaurantsListPage;
