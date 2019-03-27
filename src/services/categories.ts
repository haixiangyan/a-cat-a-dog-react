import store from '../store/store'

const axios = store.getState().axios

export default {
  getCategories: () => {
    return axios
      .get(`/categories`)
      .then((response: any) => response.data)
  }
}
