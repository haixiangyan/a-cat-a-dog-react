import {IUpdateUserPayload, UserAction} from "../../store/user"
import {IAxiosAction} from "../../store/axios"
import {RouteComponentProps} from "react-router"

export interface IRegisterProps extends RouteComponentProps {
  updateUser: (payload: IUpdateUserPayload) => UserAction
  updateAxios: (payload: 'CAT'|'DOG') => IAxiosAction
}
export interface IRegisterState {
  subId: string
  type: 'CAT'|'DOG'
  isError: boolean
}
