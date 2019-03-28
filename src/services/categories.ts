import store from "../store/store"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getCategories: () => {
    return axios
      .get(`/categories`)
      .then((response: AxiosResponse) => response.data)
  }
}
