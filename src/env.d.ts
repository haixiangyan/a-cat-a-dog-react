export interface IBreed {
  id: string
  name: string
}

export interface IImage {
  id: string
  url: string
  width: number
  height: number
  breeds: Array<IBreed>
}
