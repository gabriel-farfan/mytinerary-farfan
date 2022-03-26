const initialState = {
  itineraries: [],
  auxiliar: [],
  activities: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {

    case "GET_ITINERARIES_PER_CITY":
      let variableee = action.payload
      return {
        ...state,
        itineraries: variableee,
      };

    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload
      }

    case "GET_ALL_ACTIVITIES":
      console.log(action.payload);
      return {
        ...state,
        activities: action.payload
      }



    default:
      return state;
  }
};

export default itinerariesReducer;
