import {IFavouritesElement, IImage} from "../../env"
import {IUserStore} from "../../store/user"

export interface IImageWithFavourite extends IImage{
  favourite: IFavouritesElement
}

export interface IFavouritesProps {
  user: IUserStore
}
export interface IFavouritesState {
  imagesWithFavourite: Array<IImageWithFavourite>
  isOpenDialog: boolean
  deletingFavouriteId: string
}
