export const selectRestaurantsListError = ({ error }) => error;

export const selectRestaurantsList = ({ restaurantsListData }) => {
  if (!restaurantsListData) {
    return [];
  }

  const { feedItems, storesMap } = restaurantsListData;

  return feedItems.map(({ uuid }) => storesMap[uuid]);
};

export const selectIsLoading = ({ isLoading }) => isLoading;

export const selectRestaurantInfo = ({ restaurantInfo }) => restaurantInfo;

export const selectQueryString = ({ queryString }) => queryString;

export const selectMenuItemInfo = ({ menuItemInfo }) => menuItemInfo;
