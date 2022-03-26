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


    // --------------- NUEVOS -----------------------



    likeItinerary: (id) => {
        console.log(id)
        const token = localStorage.getItem("token")
        return async () => {
            try {
                let res = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {}, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(res.data)
                return (res.data.response)

            } catch (error) {
                console.log(error)
            }

        }
    },

    getAllActivities: () => {
        console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
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

    addCommentPerItinerary: (id, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/comments/${id}`, { comment, type: "addComment" }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                return response.data.response
            } catch (error) {
                console.log(error)
            }
        }
    },

    editAComment: (id, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/comments/${id}`, { comment, type: "editComment" }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                console.log(response)
                if (response.data.success) return { success: true, res: response.data.response }
            } catch (error) {
                console.log(error)
            }
        }
    },

    deleteAComment: (id, token, commentId) => {

        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/comments/${id}`, { commentId, type: "deleteComment" }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                if (response.data.success) {
                    return response.data
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

};

export default itinerariesActions;
