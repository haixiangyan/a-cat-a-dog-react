import {
  INIT_SETTING_BREEDS,
  INIT_SETTING_CATEGORIES,
  UPDATE_SETTING_BREEDS,
  UPDATE_SETTING_CATEGORIES,
  UPDATE_SETTING_TYPE
} from "../actionTypes";
import {
  IInitBreedsAction,
  IInitCategoriesAction,
  ISettingStore,
  IUpdateBreedsAction,
  IUpdateCategoriesAction,
  IUpdateTypeAction,
  SettingAction
} from "./index"

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
      return {...state, breeds: (<IInitBreedsAction>action).payload}
    case UPDATE_SETTING_BREEDS:
      const changedBreedId: string = (<IUpdateBreedsAction>action).payload
      return {...state, breeds: {...state.breeds, [changedBreedId]: true}}
    case INIT_SETTING_CATEGORIES:
      return {...state, categories: (<IInitCategoriesAction>action).payload}
    case UPDATE_SETTING_CATEGORIES:
      const changedCategoryId: string = (<IUpdateCategoriesAction>action).payload
      return {...state, categories: {...state.categories, [changedCategoryId]: true}}
    default:
      return state
  }
}

export default reducer
