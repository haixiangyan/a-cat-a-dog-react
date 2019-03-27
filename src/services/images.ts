import store from '../store/store'

const axios = store.getState().axios

export default {
  getImages: (params?: IGetImagesParams) => {
    return axios
      .get(`/images/search`, {params})
      .then((response: any) => response.data)
  },
  getImageById: (imageId: string, params: IGetImageByIdParams) => {
    return axios
      .get(`/images/${imageId}`, {params})
      .then((response: any) => response.data)
  },
  getUploadedImages: (params: IGetUploadedImagesParams) => {
    return axios
      .get(`/images`, {params})
      .then((response: any) => response.data)
  },
  uploadImage: (data: IUploadImageData) => {
    return axios
      .post(`/images/upload`, data)
      .then((response: any) => response.data)
  },
  deleteImage: (imageId: string) => {
    return axios
      .delete(`/images/${imageId}`)
      .then((response: any) => response.data)
  },
  analyzeImage: (imageId: string) => {
    return axios
      .get(`/images/${imageId}/analysis`)
      .then((response: any) => response.data)
  }
}
