import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IImage, IImageAnalysis} from "../../env"
import * as React from "react"
import {IUserStore} from "../../store/user"

export interface IHomeActionProps {
}
export interface IHomeProps extends IHomeActionProps {
  axios: AxiosInstance
  user: IUserStore
}
export interface IHomeState {
  images: Array<IImage>
  imageInput: React.RefObject<HTMLInputElement>
  isOpenMsg: boolean
  isOpenAnalysis: boolean
  msg: string
  imageAnalysis: Array<IImageAnalysis>
}
