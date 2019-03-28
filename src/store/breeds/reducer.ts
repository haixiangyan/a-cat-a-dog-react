import {INIT_BREEDS} from "../actionTypes";
import {IBreed} from "../../env"
import {IBreedsAction} from "./index"

const reducer = (state: Array<IBreed>=[], action: IBreedsAction) => {
  switch (action.type) {
    case INIT_BREEDS:
      return action.payload
    default:
      return state
  }
}

export default reducer
