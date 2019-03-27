export interface IBreed {
  id: string
  name: string
}

export interface IImage {
  id: string
  url: string
  width: number
  height: number
  mime_type: string
  breeds: Array<IBreed>
  categories: Array<any>
  breed_ids: string
}
