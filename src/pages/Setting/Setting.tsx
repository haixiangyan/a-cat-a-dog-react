import * as React from 'react'
// Redux
import {ISettingActionProps, ISettingItem, ISettingProps, ISettingState} from "./index"
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
import {Wrapper, TypeSetting, BreedSetting, CategorySetting} from "./styles"

class Setting extends React.Component<ISettingProps, ISettingState> {
  constructor(props: ISettingProps) {
    super(props)
    this.state = {
      selectedType: 'CAT',
      selectedBreed: {},
      selectedCategory: ''
    }
  }

  private onChangeType = (event: React.ChangeEvent<any>) => {
    this.setState({
      selectedType: event.target.value
    })
  }

  private onChangeBreed = (event: React.ChangeEvent<any>) => {
    const newSelectedBreed = Object.assign({}, this.state.selectedBreed, {
      [event.target.value]: true
    })
    this.setState({
      selectedBreed: newSelectedBreed
    })
  }

  public render() {
    const {selectedType, selectedBreed, selectedCategory} = this.state
    const {breeds, categories} = this.props
    return (
      <Wrapper>
        <Header/>
        <section>
          <h3>Type Setting</h3>
          <TypeSetting>
            <RadioGroup value={selectedType} onChange={this.onChangeType}>
              <FormControlLabel value="CAT" control={<Radio />} label="CAT" />
              <FormControlLabel value="DOG" control={<Radio />} label="DOG" />
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
                  value={breed.id}
                  control={<Checkbox />}
                  onChange={this.onChangeBreed}
                  checked={selectedBreed[breed.id]}
                  label={breed.name}
                />
              )
            }
          </BreedSetting>
        </section>
        <section>
          <h3>Category Setting</h3>
          <CategorySetting>
            <RadioGroup value={selectedType} onChange={this.onChangeType}>
              <FormControlLabel value="CAT" control={<Radio />} label="CAT" />
              <FormControlLabel value="DOG" control={<Radio />} label="DOG" />
            </RadioGroup>
          </CategorySetting>
        </section>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore): ISettingProps => ({
  breeds: state.breeds,
  categories: state.categories
})

const mapDispatchToProps: ISettingActionProps = { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
