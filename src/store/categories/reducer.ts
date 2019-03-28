import {INIT_CATEGORIES} from "../actionTypes";
import {ICategory} from "../../env"
import {ICategoriesAction} from "./index"

const reducer = (state: Array<ICategory>=[], action: ICategoriesAction) => {
  switch (action.type) {
    case INIT_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export default reducer
