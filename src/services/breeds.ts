import store from '../store/store'

const axios = store.getState().axios

export default {
  getBreeds: (params: IGetBreedsParams) => {
    return axios
      .get(`/breeds`)
      .then((response: any) => response.data)
  },
  getBreedById: (breedId: string) => {
    return axios
      .get(`/breeds/${breedId}`)
      .then((response: any) => response.data)
  }
}
