import axios from "axios";

const itinerariesActions = {
  
  getItinerariesPerCity: (id) => {
    return async (dispatch, getState) => {
      let res = await axios.get(`http://localhost:4000/api/itineraries/${id}`);
      // console.log(res.data.response);
      return (res.data.response)
      // dispatch({
      //   type: "GET_ITINERARIES_PER_CITY",
      //   payload: res.data.response,
      // });
    };
  },

  getAllItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get(`http://localhost:4000/api/itineraries`);
      dispatch({
        type: "GET_ITINERARIES",
        payload: res.data.response,
      });
    };
  },
};

export default itinerariesActions;
