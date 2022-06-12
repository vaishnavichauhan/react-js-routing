import { combineReducers } from "redux";

import HomeReducer from "./HomeReducer";
import loginReucer from "./loginReucer";
import registrationReducer from "./registrationReducer";
//import userReducer from "./userReducer";


const rootReducer = combineReducers(
    {
    // conuter: counterReducer,
    // product : productReducer,
    // productsOldModule: products,
    // userdata : userReducer,
    registration:registrationReducer,
    loginData: loginReucer,
    homedata:HomeReducer
    }
)

export default rootReducer;