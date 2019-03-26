import {Action} from "redux"

export interface AxiosAction<T> extends Action<T> {
  payload: 'CAT'|'DOG'
}

export interface AxiosMapper {
  CAT: AxiosInstance
  DOG: AxiosInstance
  [key: string]: AxiosInstance
}
