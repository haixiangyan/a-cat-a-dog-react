import {AxiosInstance} from "axios"
import {IBreed, ICategory} from "../env"
import {ISettingStore} from "./setting"

export interface IStore {
  axios: AxiosInstance
  breeds: Array<IBreed>
  categories: Array<ICategory>
  setting: ISettingStore
}
