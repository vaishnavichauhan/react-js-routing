import axios from "axios";
// import authFetch from "../interceptors";
import {  Login_Failed, Login_Start, Login_SUCCESS} from "../constans";

export  const loginData = (data) => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: Login_Start });
      // Return promise with success and failure actions
      return axios.post('http://localhost:4000/accounts/authenticate',data).then(  
        user => { 
          dispatch({ type: Login_SUCCESS, payload: user });

          localStorage.setItem("token",JSON.stringify(user.data));
         
        
        },
        err => dispatch({ type: Login_Failed, payload :  err })
      );
    };
  };