//import axios from "axios";
import {  Home_AccountData} from "../constans";
import authFetch from "../interceptors";

export  const HomeAction = () => {

    return (dispatch) => { 
      return authFetch.get('/accounts').then(  
        AccountData => dispatch({ type: Home_AccountData, payload: AccountData.data })
      );
    };
  };