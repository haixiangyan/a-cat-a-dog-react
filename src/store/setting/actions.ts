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
  ISettingItem,
  IUpdateBreedsAction,
  IUpdateCategoriesAction,
  IUpdateTypeAction
} from "./index"

export const updateSettingType = (payload: 'CAT' | 'DOG'): IUpdateTypeAction => {
  return {
    type: UPDATE_SETTING_TYPE,
    payload
  }
}

export const initSettingBreeds = (payload: ISettingItem): IInitBreedsAction => {
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

export const initSettingCategories = (payload: ISettingItem): IInitCategoriesAction => {
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
