import {INIT_USER} from "../actionTypes"
import {IInitUserAction, IInitUserPayload} from "./index"

export const initUser = (payload: IInitUserPayload): IInitUserAction => {
  return {
    type: INIT_USER,
    payload
  }
}
