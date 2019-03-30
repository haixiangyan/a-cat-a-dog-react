import {IInitUserPayload, UserAction} from "../../store/user"
import {IAxiosAction} from "../../store/axios"
import {RouteComponentProps} from "react-router"

export interface IRegisterProps extends RouteComponentProps {
  initUser: (payload: IInitUserPayload) => UserAction
  updateAxios: (payload: 'CAT'|'DOG') => IAxiosAction
}
export interface IRegisterState {
  subId: string
  type: 'CAT'|'DOG'
}
