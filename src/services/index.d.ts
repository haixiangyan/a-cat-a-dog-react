// Image Service
import {AxiosResponse} from "axios"
import {IImage} from "../env"

interface IGetImagesParams {
  size?: 'full'|'med'|'small'|'thumb'
  mime_types?: 'jpg'|'png'|'gif'|'jpg,gif,png'
  format?: 'json'
  order?: 'RANDOM'|'ASC'|'DESC'
  page?: number
  limit?: number
  category_ids?: string
}
interface IGetImageByIdParams {
  sub_id?: string
  size?: 'full'|'med'|'small'|'thumb'
  include_vote?: string
  include_favourite?: string
}
interface IGetUploadedImagesParams {
  limit?: number
  page?: number
  order?: 'DESC'|'ASC'
  sub_id?: string
  breed_ids?: string
  category_ids?: string
  format?: 'json'
  original_filename?: string
}
interface IUploadImageData {
  file: File
  sub_id?: string
}

interface IImagesResponse extends AxiosResponse{
  data: Array<IImage>
}
interface IImageResponse extends AxiosResponse{
  data: IImage
}

// Favourites Service
interface IGetFavouritesParams {
  sub_id: string
}
interface IAddFavouriteData {
  image_id: string
  sub_id: string
}

// Votes Service
interface IGetVotesParams {
  sub_id?: string
}
interface IAddVoteData {
  image_id: string
  sub_id: string
  value: number
}

// Breeds Service
interface IGetBreedsParams {
  limit: number
  page: number
}

// Sources Service
interface IGetSourcesParams {
  limit: number
  page: number
}
