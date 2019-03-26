import {Action} from "redux"

export interface IAxiosAction<T> extends Action<T> {
  payload: 'CAT'|'DOG'
}

export interface IAxiosMapper {
  CAT: AxiosInstance
  DOG: AxiosInstance
  [key: string]: AxiosInstance
}
