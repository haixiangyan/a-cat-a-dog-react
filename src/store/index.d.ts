import {AxiosInstance} from "axios"
import {IBreed, ICategory} from "../env"
import {ISettingStore} from "./setting"
import {IUserStore} from "./user"

export interface IStore {
  axios: AxiosInstance
  breeds: Array<IBreed>
  categories: Array<ICategory>
  user: IUserStore
}
