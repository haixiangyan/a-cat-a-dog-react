import * as React from 'react'
// Redux
import {ISettingActionProps, ISettingProps, ISettingState} from "./index"
// Material UI
import Radio from "@material-ui/core/Radio"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
// Custom components
import Header from '../../components/Header/Header'
import {IStore} from "../../store"
import {connect} from "react-redux"
// Styles
import {TypeSetting} from "./styles"

class Setting extends React.Component<ISettingProps, ISettingState> {
  constructor(props: ISettingProps) {
    super(props)
    this.state = {
      selectedType: 'CAT',
      selectedBreed: '',
      selectedCategory: ''
    }
  }

  private onChangeType = (event: React.ChangeEvent<any>) => {
    this.setState({
      selectedType: event.target.value
    })
  }

  public render() {
    const {selectedType} = this.state
    return (
      <div>
        <Header/>

        <TypeSetting>
          <h3>Type Setting</h3>
          <RadioGroup value={selectedType} onChange={this.onChangeType}>
            <FormControlLabel value="CAT" control={<Radio />} label="CAT" />
            <FormControlLabel value="DOG" control={<Radio />} label="DOG" />
          </RadioGroup>
        </TypeSetting>
      </div>
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
