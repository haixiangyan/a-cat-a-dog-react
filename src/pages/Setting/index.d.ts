import {IBreed, ICategory} from "../../env"
import {
  IInitBreedsAction,
  IInitCategoriesAction, ISettingStore,
  IUpdateBreedsAction,
  IUpdateCategoriesAction,
  IUpdateTypeAction
} from "../../store/setting"

export interface ISettingActionProps {
  updateSettingType: (payload: 'CAT' | 'DOG') => IUpdateTypeAction
  updateSettingBreeds: (payload: string) => IUpdateBreedsAction
  updateSettingCategories: (payload: string) => IUpdateCategoriesAction
  initSettingBreeds: (payload: ISettingItem) => IInitBreedsAction
  initSettingCategories: (payload: ISettingItem) => IInitCategoriesAction
}

export interface ISettingProps extends ISettingActionProps {
  breeds: Array<IBreed>
  categories: Array<ICategory>
  setting: ISettingStore
}

export interface ISettingState {
}

export interface ISettingItem {
  [key: string]: boolean
}
