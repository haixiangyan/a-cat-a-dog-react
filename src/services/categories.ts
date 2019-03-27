import store from "../store/store"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getCategories: () => {
    return axios
      .get(`/categories`)
      .then((response: any) => response.data)
  }
}
