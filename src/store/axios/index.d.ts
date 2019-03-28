import {Action} from "redux"

export interface IAxiosAction extends Action<string> {
  payload: 'CAT'|'DOG'
}

export interface IAxiosMapper {
  CAT: AxiosInstance
  DOG: AxiosInstance
  [key: string]: AxiosInstance
}
