import axios from './axios/reducer'
import breeds from './breeds/reducer'
import { combineReducers } from "redux";

export default combineReducers({
  axios,
  breeds
})
