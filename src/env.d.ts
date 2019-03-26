import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"

export interface IAppActionProps {
  updateAxios: (species: 'DOG'|'CAT') => IAxiosAction<string>
}
export interface IAppStoreProps {
  axios: AxiosInstance,
}
export interface IAppProps extends IAppActionProps, IAppStoreProps{
  a?:string
}
export interface IAppState {
  animals: any[]
}
