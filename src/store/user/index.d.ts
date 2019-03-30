import {Action} from "redux"

export interface IUserStore {
  subId: string
}

export interface IInitUserPayload {
  subId: string
}

export interface IInitUserAction extends Action<string>{
  payload: IInitUserPayload
}

type UserAction = IInitUserAction
