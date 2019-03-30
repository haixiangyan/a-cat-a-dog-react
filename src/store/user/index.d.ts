import {Action} from "redux"

export interface IUserStore {
  subId: string
  type: string
}

export interface IUpdateUserPayload {
  subId: string
  type: string
}

export interface IUpdateUserAction extends Action<string>{
  payload: IUpdateUserPayload
}

type UserAction = IUpdateUserAction
