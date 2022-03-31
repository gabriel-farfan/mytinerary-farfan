import axios from "axios";

export const getAllCities = async () => {
  try {
    let data = await axios.get(`https://mytinerary-farfan.herokuapp.com/api/allcities`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const cargarDatos = async (dataInput) => {
  console.log(dataInput);
  try {
    let data = await axios.post(`https://mytinerary-farfan.herokuapp.com/api/allcities`, {
      dataInput,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const eliminarCiudad = async (id) => {
  console.log(id);
  try {
    let data = await axios.delete(
      `https://mytinerary-farfan.herokuapp.com/api/allcities/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
export const modificarCiudad = async (id, dataInput) => {
  console.log(id, dataInput);
  try {
    let data = await axios.put(`https://mytinerary-farfan.herokuapp.com/api/V1/allcities/${id}`, {
      dataInput,
    });
    return data;
  } catch (error) {
    throw error;
  }
};


export const getAllItineraries = async () => {
  try {
    let data = await axios.get(`https://mytinerary-farfan.herokuapp.com/api/itineraries`);
    return data;
  } catch (error) {
    throw error;
  }
};

