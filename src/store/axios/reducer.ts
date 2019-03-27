import {UPDATE_AXIOS} from "../actionTypes";
import {AxiosInstance} from "axios"
import {catAxios, dogAxios} from "../../axios"
import {IAxiosAction, IAxiosMapper} from "./index"

const mapper: IAxiosMapper = {
  CAT: catAxios,
  DOG: dogAxios
}

const reducer = (state: AxiosInstance=catAxios, action: IAxiosAction<string>) => {
  switch (action.type) {
    case UPDATE_AXIOS:
      return mapper[action.payload]
    default:
      return state
  }
}

export default reducer
