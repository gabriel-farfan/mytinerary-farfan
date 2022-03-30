import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("https://mytinerary-farfan.herokuapp.com/api/allcities");
      // console.log(response);
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
      const res = await axios.get(`https://mytinerary-farfan.herokuapp.com/api/allcities/${id}`);
      return res.data.response;
    };
  },
};

export default citiesActions;
