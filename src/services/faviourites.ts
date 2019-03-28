import store from "../store/store"
import {
  IAddFavouriteData,
  IGetFavouritesParams
} from "./index"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getFavourites: (params: IGetFavouritesParams) => {
    return axios
      .get(`/favourites`, {params})
      .then((response: AxiosResponse) => response.data)
  },
  getFavouriteById: (favouriteId: string) => {
    return axios
      .get(`/favourites/${favouriteId}`)
      .then((response: AxiosResponse) => response.data)
  },
  addFavourite: (data: IAddFavouriteData) => {
    return axios
      .post(`/favourites`, data)
      .then((response: AxiosResponse) => response.data)
  },
  deleteFavourite: (favouriteId: string) => {
    return axios
      .delete(`/favourites/${favouriteId}`)
      .then((response: AxiosResponse) => response.data)
  }
}
