import {UPDATE_SETTING_TYPE} from "../actionTypes"
import {IUpdateSettingTypeAction} from "./index"

export const updateSettingType = (payload: 'CAT' | 'DOG'): IUpdateSettingTypeAction => {
  return {
    type: UPDATE_SETTING_TYPE,
    payload
  }
}
