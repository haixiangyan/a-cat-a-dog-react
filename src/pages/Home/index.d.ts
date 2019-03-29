import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IBreed, ICategory, IImage, IImageAnalysis} from "../../env"
import * as React from "react"

export interface IHomeActionProps {
}
export interface IHomeProps extends IHomeActionProps {
  axios: AxiosInstance
  breeds: Array<IBreed>
  categories: Array<ICategory>
}
export interface IHomeState {
  images: Array<IImage>
  imageInput: React.RefObject<HTMLInputElement>
  isOpenMsg: boolean
  isOpenAnalysis: boolean
  msg: string
  imageAnalysis: Array<IImageAnalysis>
}
