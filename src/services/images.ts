import store from "../store/store"
import {
  IGetImageByIdParams, IGetImagesParams, IGetUploadedImagesParams, IUploadImageData
} from "./index"
import {AxiosResponse} from "axios"

let axios = store.getState().axios

store.subscribe(() => {
  axios = store.getState().axios
})

export default {
  getImages: (params?: IGetImagesParams) => {
    return axios
      .get(`/images/search`, {params})
      .then((response: AxiosResponse) => response.data)
  },
  getImageById: (imageId: string, params: IGetImageByIdParams) => {
    return axios
      .get(`/images/${imageId}`, {params})
      .then((response: AxiosResponse) => response.data)
  },
  getUploadedImages: (params: IGetUploadedImagesParams) => {
    return axios
      .get(`/images`, {params})
      .then((response: AxiosResponse) => response.data)
  },
  uploadImage: (data: IUploadImageData) => {
    return axios
      .post(`/images/upload`, data)
      .then((response: AxiosResponse) => response.data)
  },
  deleteImage: (imageId: string) => {
    return axios
      .delete(`/images/${imageId}`)
      .then((response: AxiosResponse) => response.data)
  },
  analyzeImage: (imageId: string) => {
    return axios
      .get(`/images/${imageId}/analysis`)
      .then((response: AxiosResponse) => response.data)
  }
}
