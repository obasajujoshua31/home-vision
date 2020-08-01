import getHouses from "../services/getHouses";
import {
  HOUSES_LOADED,
  LOADING_FAILED,
  IS_FETCHING,
  RESET_HOUSES,
} from "./types";

const getHousesAction = (
  { page = 1, per_page = 9, isLoaded = false, reset = false },
  dispatch
) => {
  if (!isLoaded) {
    dispatch({ type: IS_FETCHING });
  }

  if (reset) {
    dispatch({ type: RESET_HOUSES });
  }

  getHouses(page, per_page)
    .then((data) => dispatch({ type: HOUSES_LOADED, payload: data.houses }))
    .catch((error) => {
      dispatch({ type: LOADING_FAILED });
    });
};

export default getHousesAction;
