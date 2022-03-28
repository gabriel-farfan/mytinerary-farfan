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



    likeItinerary: (id) => {
        const token = localStorage.getItem("token")
        return async () => {
            try {
                let res = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {}, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                return (res.data.response)

            } catch (error) {
                console.log(error)
            }

        }
    },

    getAllActivities: () => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get(`http://localhost:4000/api/activities`)

                dispatch({
                    type: "GET_ALL_ACTIVITIES",
                    payload: response.data.response
                    // return response.data.response[0].activities
                })
            } catch (error) {
                console.log(error)
            }
        }
    },

    getActivitiesPerItinerary: (id) => {
        return async () => {
            try {
                let response = await axios.get(`http://localhost:4000/api/activities/${id}`)
                if (response.data.success) {
                    return response.data.response[0].activities
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    

    addComment: (comment) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            try {
                let response = await axios.post(`http://localhost:4000/api/itinerary/comments`, { comment }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                // return response.data.response
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    },

    modifyComment: (comment) => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/comments`, { comment }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    },

    deleteComment: (commentId) => {
        const token = localStorage.getItem("token")
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itinerary/comments`, { commentId }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
    }

};

export default itinerariesActions;
