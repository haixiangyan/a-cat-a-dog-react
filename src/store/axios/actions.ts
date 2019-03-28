import {UPDATE_AXIOS} from "../actionTypes"
import {IAxiosAction} from "./index"

export const updateAxios = (payload: 'CAT'|'DOG'): IAxiosAction => {
  return {
    type: UPDATE_AXIOS,
    payload
  }
}
