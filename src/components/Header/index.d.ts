import {RouteComponentProps} from "react-router-dom"

export interface IHeaderState {
  isOpenUser: boolean
  userEl: HTMLElement|null
  isOpenSetting: boolean
  settingEl: HTMLElement|null
}
export interface IHeaderProps extends RouteComponentProps{
}
