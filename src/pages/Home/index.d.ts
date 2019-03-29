import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IBreed, ICategory, IImage} from "../../env"
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
  msg: string
}
