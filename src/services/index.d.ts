// Image Service
interface IGetImagesParams {
  size?: string
  mime_types?: 'jpg'|'png'|'gif'
  format?: 'json'
  order?: 'RANDOM'
  page?: number
  limit?: number
  category_ids?: string
}
interface IGetImageByIdParams {
  sub_id?: string
  size?: number
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
