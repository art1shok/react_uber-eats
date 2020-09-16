import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectIsLoading,
  selectRestaurantInfo,
} from '../../store/selectors';
import { loadRestaurantInfo, loadMenuItemInfo } from '../../store/actions';
import './RestaurantPage.scss';
import { Loader } from '../Loader/Loader';
import { RestaurantPageNav } from '../RestaurantPageNav/RestaurantPageNav';
import {
  RestaurantPageSection,
} from '../RestaurantPageSection/RestaurantPageSection';

const RestaurantPage = () => {
  const info = useSelector(selectRestaurantInfo);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { uuid } = useParams();

  useEffect(() => {
    dispatch(loadRestaurantInfo(uuid));
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadMenuItemInfo(uuid));
  }, [dispatch]);

  if (isLoading && !info) {
    return (
      <Loader />
    );
  }

  return (
    <div className="restaurant-page">
      {info && (
        <>
          <div className="restaurant-page__top">
            <div className="restaurant-page__img-wrapper">
              <img
                src={info.heroImageUrls[info.heroImageUrls.length - 1].url}
                alt={info.title}
                className="restaurant-page__main-img"
              />
            </div>

            <div className="restaurant-page__details">
              <div className="restaurant-page__details-wrapper">
                <div className="restaurant-page__details-content">
                  <h1 className="restaurant-page__main-title">
                    {info.title}
                  </h1>
                  <p className="restaurant-page__description">
                    {`£ • ${info.cuisineList.join(' • ')}`}
                  </p>
                  <p className="restaurant-page__time">
                35 - 45 min
                  </p>
                  <p className="restaurant-page__location">
                    {info.location.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="restaurant-page__main-content">
              <RestaurantPageNav
                sections={info.sections.map(sectionUuid => ({
                  title: info.sectionsMap[sectionUuid].title, uuid: sectionUuid,
                }))
                }
              />

              <RestaurantPageSection
                sections={info.sections.map(sectionUuid => ({
                  title: info.sectionsMap[sectionUuid].title,
                  uuid: sectionUuid,
                  itemUuids: info.sectionsMap[sectionUuid].itemUuids,
                  entitiesMap: info.entitiesMap,
                }))}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantPage;
