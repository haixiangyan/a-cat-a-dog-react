import {AxiosInstance} from "axios"
import {IBreed} from "../env"

export interface IStore {
  axios: AxiosInstance,
  breeds: Array<IBreed>
}
