import axios from "axios";

const URL = "http://app-homevision-staging.herokuapp.com/api_project/houses";

const getHouses = (page = 1, per_page = 9) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(`${URL}?page=${page}&per_page=${per_page}`)
      .then((resp) => resolve(resp.data))
      .catch((error) => {
        reject(error.response);
      });
  });
};

export default getHouses;
