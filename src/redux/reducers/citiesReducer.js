const initialState = {
  allCities: [],
  searchedCities: [],
  newCity: {},
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "getAllCities":
      return {
        ...state,
        allCities: action.payload,
        searchedCities: action.payload,
      };

    case "filterCities":
      console.log(action.payload)
      console.log(state.searchedCities)
      let filtered = []
        filtered.push(action.payload.dataAux.filter(city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))
      console.log(filtered);
      return {
        ...state,
        allCities: filtered[0]
      };

    case "getOneCity":
      let oneCity = state.allCities.find((city) => city._id === action.payload);
      return {
        ...state,
        newCity: oneCity,
      };

    default:
      return state;
  }
};

export default citiesReducer;
