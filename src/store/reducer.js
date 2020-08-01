import { HOUSES_LOADED, IS_FETCHING, LOADING_FAILED } from "./types";
export const initialState = {
  houses: [],
  error: null,
  isFetching: false,
};

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOUSES_LOADED: {
      return { ...state, houses: action.payload, isFetching: false };
    }

    case IS_FETCHING: {
      return { ...state, isFetching: true };
    }

    case LOADING_FAILED: {
      return { ...state, error: "error is present", isFetching: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default housesReducer;
