import {Action} from "redux"
import {IBreed} from "../../env"

export interface IBreedsAction extends Action<string> {
  payload: Array<IBreed>
}
