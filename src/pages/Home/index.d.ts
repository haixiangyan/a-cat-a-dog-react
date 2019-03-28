import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IBreed, IImage} from "../../env"

export interface IHomeActionProps {
}
export interface IHomeProps extends IHomeActionProps {
  axios: AxiosInstance
  breeds: Array<IBreed>
}
export interface IHomeState {
  images: Array<IImage>
}
