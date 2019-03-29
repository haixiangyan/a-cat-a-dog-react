import {
  INIT_SETTING_BREEDS,
  INIT_SETTING_CATEGORIES,
  UPDATE_SETTING_BREEDS,
  UPDATE_SETTING_CATEGORIES,
  UPDATE_SETTING_TYPE
} from "../actionTypes";
import {
  IInitBreedsAction, IInitCategoriesAction,
  ISettingItem,
  ISettingStore,
  IUpdateBreedsAction, IUpdateCategoriesAction,
  IUpdateTypeAction,
  SettingAction
} from "./index"
import {IBreed, ICategory} from "../../env"

let initState: ISettingStore = {
  type: 'CAT',
  breeds: {},
  categories: {}
}

const reducer = (state = initState, action: SettingAction) => {
  switch (action.type) {
    case UPDATE_SETTING_TYPE:
      return {...state, type: (<IUpdateTypeAction>action).payload}
    case INIT_SETTING_BREEDS:
      const breeds: Array<IBreed> = (<IInitBreedsAction>action).payload
      const initSettingBreeds: ISettingItem = {}
      breeds.forEach(breed => {
        initSettingBreeds[breed.id] = false
      })
      return {...state, breeds: initSettingBreeds}
    case UPDATE_SETTING_BREEDS:
      const changedBreedId: string = (<IUpdateBreedsAction>action).payload
      return {...state, breeds: {...state.breeds, [changedBreedId]: true}}
    case INIT_SETTING_CATEGORIES:
      const categories: Array<ICategory> = (<IInitCategoriesAction>action).payload
      const initSettingCategories: ISettingItem = {}
      categories.forEach(category => {
        initSettingCategories[category.id] = false
      })
      return {...state, categories: initSettingCategories}
    case UPDATE_SETTING_CATEGORIES:
      const changedCategoryId: string = (<IUpdateCategoriesAction>action).payload
      return {...state, categories: {...state.categories, [changedCategoryId]: true}}
    default:
      return state
  }
}

export default reducer
