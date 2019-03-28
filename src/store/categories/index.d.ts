import {Action} from "redux"
import {ICategory} from "../../env"

export interface ICategoriesAction extends Action<string> {
  payload: Array<ICategory>
}
