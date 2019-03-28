import store from "../store/store"
import {IGetBreedsParams} from "./index"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getBreeds: (params: IGetBreedsParams) => {
    return axios
      .get(`/breeds`, {
        params
      })
      .then((response: AxiosResponse) => response.data)
  },
  getBreedById: (breedId: string) => {
    return axios
      .get(`/breeds/${breedId}`)
      .then((response: AxiosResponse) => response.data)
  }
}
