import {IBreed, ICategory} from "../../env"

export interface ISettingActionProps {

}
export interface ISettingProps extends ISettingActionProps{
  breeds: Array<IBreed>
  categories: Array<ICategory>
}

export interface ISettingState {
  selectedType: 'CAT'|'DOG'
  selectedBreed: ISettingItem
  selectedCategory: string
}

export interface ISettingItem {
  [key: string]: boolean
}
