import {AxiosInstance} from "axios"
import {IBreed, ICategory} from "../env"

export interface IStore {
  axios: AxiosInstance,
  breeds: Array<IBreed>,
  categories: Array<ICategory>
}
