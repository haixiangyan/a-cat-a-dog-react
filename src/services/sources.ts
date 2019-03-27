import store from '../store/store'

const axios = store.getState().axios

export default {
  getSources: (params: IGetSourcesParams) => {
    return axios
      .get(`/sources`, {params})
      .then((response: any) => response.data)
  }
}
