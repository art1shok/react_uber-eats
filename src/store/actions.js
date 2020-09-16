export const ACTIONS_TYPES = {
  SAVE_RESTAURANTS: 'SAVE_RESTAURANTS',
  SAVE_RESTAURANT_INFO: 'SAVE_RESTAURANTS_INFO',
  SAVE_MENU_ITEM_INFO: 'SAVE_MENU_ITEM_INFO',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
};

const saveRestaurants = data => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANTS,
  payload: data,
});

const setRestaurantsError = error => ({
  type: ACTIONS_TYPES.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

const saveRestaurantInfo = data => ({
  type: ACTIONS_TYPES.SAVE_RESTAURANT_INFO,
  payload: data,
});

const saveMenuItemInfo = data => ({
  type: ACTIONS_TYPES.SAVE_MENU_ITEM_INFO,
  payload: data,
});

export const loadRestaurants = () => async(dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(
      'https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants'
    );
    const { data } = await response.json();

    dispatch(saveRestaurants(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const loadRestaurantInfo = id => async(dispatch) => {
  try {
    dispatch(startLoading());

    const response = await fetch(
      `https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${id}`
    );
    const { data } = await response.json();

    dispatch(saveRestaurantInfo(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const loadMenuItemInfo = id => async(dispatch) => {
  try {
    dispatch(startLoading());

    const response = await fetch(
      `https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items${id}`
    );

    const { data } = await response.json();

    dispatch(saveMenuItemInfo(data));
  } catch (e) {
    dispatch(setRestaurantsError(e.message));
  } finally {
    dispatch(stopLoading());
  }
};
