import {INIT_CATEGORIES} from "../actionTypes"
import {ICategoriesAction} from "./index"
import {ICategory} from "../../env"

export const initCategories = (payload: Array<ICategory>): ICategoriesAction => {
  return {
    type: INIT_CATEGORIES,
    payload
  }
}
