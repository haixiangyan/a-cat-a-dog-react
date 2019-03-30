import {RouteComponentProps} from "react-router-dom"
import {IUserStore} from "../../store/user"

export interface IHeaderState {
  isOpenUser: boolean
  userEl: HTMLElement|null
  isOpenSetting: boolean
  settingEl: HTMLElement|null
}
export interface IHeaderProps extends RouteComponentProps{
  user: IUserStore
}
