import {UPDATE_AXIOS} from "../actionTypes";
import {AxiosInstance} from "axios"
import {catAxios, dogAxios} from "../../axios"
import {AxiosAction, AxiosMapper} from "./index"

const mapper: AxiosMapper = {
  CAT: catAxios,
  DOG: dogAxios
}

const reducer = (state: AxiosInstance=catAxios, action: AxiosAction<string>) => {
  switch (action.type) {
    case UPDATE_AXIOS:
      console.log(mapper[action.payload])
      return mapper[action.payload]
    default:
      return state
  }
}

export default reducer
