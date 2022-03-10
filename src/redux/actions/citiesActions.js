import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/allcities");
      console.log(response);
      dispatch({
        type: "getAllCities",
        payload: response.data.response.ciudades,
      });
    };
  },

  filterCities: (dataAux, value) => {
    return async (dispatch, getState) => {
      dispatch({ type: "filterCities", payload: { value, dataAux } });
    };
  },

  getOneCity: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get(`http://localhost:4000/api/allcities/${id}`);
      return res.data.response;
    };
  },
};

export default citiesActions;
