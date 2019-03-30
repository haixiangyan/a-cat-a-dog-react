import {ISettingStore, IUpdateSettingTypeAction} from "../../store/setting"
import {IAxiosAction} from "../../store/axios"
import {IUpdateUserAction, IUpdateUserPayload, IUserStore} from "../../store/user"

export interface ISettingActionProps {
  updateAxios: (payload: 'CAT'|'DOG') => IAxiosAction
  updateUser: (payload: IUpdateUserPayload) => IUpdateUserAction
}

export interface ISettingProps extends ISettingActionProps {
  user: IUserStore
}

export interface ISettingState {
}
