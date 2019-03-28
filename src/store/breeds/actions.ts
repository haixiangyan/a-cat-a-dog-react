import {INIT_BREEDS} from "../actionTypes"
import {IBreedsAction} from "./index"
import {IBreed} from "../../env"

export const initBreeds = (payload: Array<IBreed>): IBreedsAction => {
  return {
    type: INIT_BREEDS,
    payload
  }
}
