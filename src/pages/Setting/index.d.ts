import {ISettingStore, IUpdateSettingTypeAction} from "../../store/setting"
import {IAxiosAction} from "../../store/axios"

export interface ISettingActionProps {
  updateAxios: (payload: 'CAT'|'DOG') => IAxiosAction
  updateSettingType: (payload: 'CAT'|'DOG') => IUpdateSettingTypeAction
}

export interface ISettingProps extends ISettingActionProps {
  setting: ISettingStore
}

export interface ISettingState {
}
