import axios from 'axios';

const userActions = {

    signUpUser: (userData) => {
        return async (dispatch, getState) => {

            const res = await axios.post('http://localhost:4000/api/auth/signUp', { userData })
            dispatch({type: 'message', payload: res.data});
            console.log(res);
            // ACA SALE PARA "ROUTES"
            
        }
    },
    signInUser: (logedUser) => {

        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { logedUser })
            if(user.data.success){
            dispatch({type: 'user', payload: user.data.response.userData});
            }else{console.log(user.data.message)}

        } 
    },
    SignOutUser :(closeuser)=>{
        return async (dispatch, getState) => {
        const user = axios.post('http://localhost:4000/api/auth/signOut',{closeuser})
        dispatch({type: 'user', payload: null});
    } 
}
}
export default userActions;