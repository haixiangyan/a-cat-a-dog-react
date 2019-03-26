import {UPDATE_AXIOS} from "../actionTypes"
import {AxiosAction} from "./index"

export const updateAxios = (payload: 'CAT'|'DOG'): AxiosAction<string> => {
  return {
    type: UPDATE_AXIOS,
    payload
  }
}
