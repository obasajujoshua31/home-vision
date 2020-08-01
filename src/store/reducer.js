import {
  HOUSES_LOADED,
  IS_FETCHING,
  LOADING_FAILED,
  RESET_HOUSES,
} from "./types";
export const initialState = {
  houses: [],
  error: null,
  isFetching: false,
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOUSES_LOADED: {
      return {
        ...state,
        houses: [...state.houses, ...action.payload],
        isFetching: false,
        error: null,
      };
    }

    case IS_FETCHING: {
      return { ...state, isFetching: true };
    }

    case LOADING_FAILED: {
      return { ...state, error: "error is present", isFetching: false };
    }
    case RESET_HOUSES: {
      return { ...state, houses: [], error: null };
    }
    default: {
      return { ...state };
    }
  }
};

export default housesReducer;
