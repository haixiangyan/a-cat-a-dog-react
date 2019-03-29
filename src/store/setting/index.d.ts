import {Action} from "redux"

export interface ISettingItem {
  [key: string]: boolean
}

// Store
export interface ISettingStore {
  type: string
  breeds: ISettingItem
  categories: ISettingItem
}

// Action
export interface IUpdateTypeAction extends Action<string> {
  payload: 'CAT' | 'DOG'
}

export interface IInitBreedsAction extends Action<string> {
  payload: ISettingItem
}

export interface IUpdateBreedsAction extends Action<string> {
  payload: string
}

export interface IInitCategoriesAction extends Action<string> {
  payload: ISettingItem
}

export interface IUpdateCategoriesAction extends Action<string> {
  payload: string
}

// General action type
type SettingAction = IUpdateTypeAction | IInitBreedsAction | IUpdateBreedsAction | IInitCategoriesAction | IUpdateCategoriesAction
