import {UPDATE_USER} from "../actionTypes"
import {IUpdateUserAction, IUpdateUserPayload} from "./index"

export const updateUser = (payload: IUpdateUserPayload): IUpdateUserAction => {
  return {
    type: UPDATE_USER,
    payload
  }
}
