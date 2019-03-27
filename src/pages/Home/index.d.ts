import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IImage} from "../../env"

export interface IHomeActionProps {
  updateAxios: (species: 'DOG'|'CAT') => IAxiosAction<string>
}
export interface IHomeStoreProps {
  axios: AxiosInstance,
}
export interface IHomeProps extends IHomeActionProps, IHomeStoreProps{
  a?:string
}
export interface IHomeState {
  images: Array<IImage>
}
