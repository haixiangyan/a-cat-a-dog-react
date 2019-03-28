import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IBreed, IImage} from "../../env"

export interface IHomeActionProps {
  updateAxios: (species: 'DOG'|'CAT') => IAxiosAction<string>
}
export interface IHomeProps extends IHomeActionProps {
  axios: AxiosInstance
  breeds: Array<IBreed>
}
export interface IHomeState {
  images: Array<IImage>
}
