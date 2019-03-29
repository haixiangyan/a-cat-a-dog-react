import {IFavouritesElement, IImage} from "../../env"

export interface IImageWithFavourite extends IImage{
  favourite: IFavouritesElement
}

export interface IFavouritesProps {
}
export interface IFavouritesState {
  imagesWithFavourite: Array<IImageWithFavourite>
  isOpenDialog: boolean
  deletingFavouriteId: string
}
