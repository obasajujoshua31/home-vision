import getHouses from "../services/getHouses";
import { HOUSES_LOADED, LOADING_FAILED, IS_FETCHING } from "./types";

const getHousesAction = ({ page = 1, per_page = 9 }, dispatch) => {
  dispatch({ type: IS_FETCHING });
  getHouses(page, per_page)
    .then((data) => dispatch({ type: HOUSES_LOADED, payload: data.houses }))
    .catch((error) => {
      dispatch({ type: LOADING_FAILED });
    });
};

export default getHousesAction;
