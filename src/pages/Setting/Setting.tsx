import * as React from 'react'
// Redux
import {ISettingActionProps, ISettingProps, ISettingState} from "./index"
import {
  initSettingBreeds,
  initSettingCategories,
  updateSettingBreeds,
  updateSettingCategories,
  updateSettingType
} from "../../store/setting/actions"
// Material UI
import Radio from "@material-ui/core/Radio"
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
// Custom components
import Header from '../../components/Header/Header'
import {IStore} from "../../store"
import {connect} from "react-redux"
// Styles
import {BreedSetting, CategorySetting, TypeSetting, Wrapper} from "./styles"

class Setting extends React.Component<ISettingProps, ISettingState> {
  constructor(props: ISettingProps) {
    super(props)
  }

  public async componentDidMount(){
    initSettingBreeds({})
    initSettingCategories({})
  }

  private onChangeType = (event: React.ChangeEvent<any>) => {
    this.setState({
      selectedType: event.target.value
    })
  }

  private onChangeBreed = (event: React.ChangeEvent<any>) => {
  }

  private onChangeCategory = (event: React.ChangeEvent<any>) => {

  }

  public render() {
    const {breeds, categories, setting} = this.props
    return (
      <Wrapper>
        <Header/>
        <section>
          <h3>Type Setting</h3>
          <TypeSetting>
            <RadioGroup value={setting.type} onChange={this.onChangeType}>
              <FormControlLabel value="CAT" control={<Radio/>} label="CAT"/>
              <FormControlLabel value="DOG" control={<Radio/>} label="DOG"/>
            </RadioGroup>
          </TypeSetting>
        </section>
        <section>
          <h3>Breed Setting</h3>
          <BreedSetting>
            {
              breeds.map(breed =>
                <FormControlLabel
                  key={breed.id}
                  value={String(breed.id)}
                  control={<Checkbox/>}
                  onChange={this.onChangeBreed}
                  checked={Boolean(setting.breeds[breed.id])}
                  label={breed.name}
                />
              )
            }
          </BreedSetting>
        </section>
        <section>
          <h3>Category Setting</h3>
          <CategorySetting>
            {
              categories.map(category =>
                <FormControlLabel
                  key={category.id}
                  value={String(category.id)}
                  control={<Checkbox/>}
                  onChange={this.onChangeCategory}
                  checked={Boolean(setting.categories[category.id])}
                  label={category.name}
                />
              )
            }
          </CategorySetting>
        </section>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  breeds: state.breeds,
  categories: state.categories,
  setting: state.setting
})

const mapDispatchToProps: ISettingActionProps = {
  updateSettingType,
  updateSettingBreeds,
  updateSettingCategories,
  initSettingBreeds,
  initSettingCategories
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
