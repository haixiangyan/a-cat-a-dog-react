import store from "../store/store"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getSources: (params: IGetSourcesParams) => {
    return axios
      .get(`/sources`, {params})
      .then((response: any) => response.data)
  }
}
