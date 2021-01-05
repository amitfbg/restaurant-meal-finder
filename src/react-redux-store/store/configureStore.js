import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getApiDataReducer from "../reducers/getApiDataReducer";

//Store Creation

let initialState = {};
let middleWare = [thunk];

const store = createStore(
  getApiDataReducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
