import axios from './axios/reducer'
import user from './user/reducer'
import { combineReducers } from "redux";

export default combineReducers({
  axios,
  user
})
