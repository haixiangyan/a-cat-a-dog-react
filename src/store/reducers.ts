import axios from './axios/reducer'
import breeds from './breeds/reducer'
import categories from './categories/reducer'
import { combineReducers } from "redux";

export default combineReducers({
  axios,
  breeds,
  categories
})
