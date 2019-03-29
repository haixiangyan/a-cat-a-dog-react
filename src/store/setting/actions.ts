import {
  INIT_SETTING_BREEDS,
  INIT_SETTING_CATEGORIES,
  UPDATE_SETTING_BREEDS,
  UPDATE_SETTING_CATEGORIES,
  UPDATE_SETTING_TYPE
} from "../actionTypes"
import {
  IInitBreedsAction,
  IInitCategoriesAction,
  IUpdateBreedsAction,
  IUpdateCategoriesAction,
  IUpdateTypeAction
} from "./index"
import {IBreed, ICategory} from "../../env"

export const updateSettingType = (payload: 'CAT' | 'DOG'): IUpdateTypeAction => {
  return {
    type: UPDATE_SETTING_TYPE,
    payload
  }
}

export const initSettingBreeds = (payload: Array<IBreed>): IInitBreedsAction => {
  return {
    type: INIT_SETTING_BREEDS,
    payload
  }
}

export const updateSettingBreeds = (payload: string): IUpdateBreedsAction => {
  return {
    type: UPDATE_SETTING_BREEDS,
    payload
  }
}

export const initSettingCategories = (payload: Array<ICategory>): IInitCategoriesAction => {
  return {
    type: INIT_SETTING_CATEGORIES,
    payload
  }
}

export const updateSettingCategories = (payload: string): IUpdateCategoriesAction => {
  return {
    type: UPDATE_SETTING_CATEGORIES,
    payload
  }
}
