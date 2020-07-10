import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      return {
        ...state,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
