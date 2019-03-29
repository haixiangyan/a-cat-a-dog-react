import {Action} from "redux"

// Store
export interface ISettingStore {
  type: string
}

// Action
export interface IUpdateSettingTypeAction extends Action<string> {
  payload: 'CAT' | 'DOG'
}
// General action type
type SettingAction = IUpdateSettingTypeAction
