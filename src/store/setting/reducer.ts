import {UPDATE_SETTING_TYPE} from "../actionTypes";
import {ISettingStore, IUpdateSettingTypeAction, SettingAction} from "./index"

let initState: ISettingStore = {
  type: 'CAT',
}

const reducer = (state = initState, action: SettingAction) => {
  switch (action.type) {
    case UPDATE_SETTING_TYPE:
      return {...state, type: (<IUpdateSettingTypeAction>action).payload}
    default:
      return state
  }
}

export default reducer
