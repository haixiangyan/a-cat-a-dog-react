import store from "../store/store"
import {IGetSourcesParams} from "./index"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getSources: (params?: IGetSourcesParams) => {
    return axios
      .get(`/sources`, {params})
      .then((response: AxiosResponse) => response.data)
  }
}
