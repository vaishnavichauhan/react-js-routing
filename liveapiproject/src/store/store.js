import { createStore } from "redux";
import rootReducer from "../reducer";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";



//const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


////sagaMiddleware.run(rootSaga);


  export default store;