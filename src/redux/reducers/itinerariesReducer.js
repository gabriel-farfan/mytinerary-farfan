const initialState = {
  itineraries: [],
  auxiliar: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES_PER_CITY":
      let variableee = action.payload
      console.log(action.payload);
      return {
        ...state,
        itineraries: variableee ,
      };

    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload
      }

    default:
      return state;
  }
};

export default itinerariesReducer;
