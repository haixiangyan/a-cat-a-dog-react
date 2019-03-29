import * as React from 'react'
// Redux
import {ISettingActionProps, ISettingProps, ISettingState} from "./index"
import {updateSettingType} from "../../store/setting/actions"
import { updateAxios } from "../../store/axios/actions"
// Material UI
import Radio from "@material-ui/core/Radio"
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// Custom components
import Header from '../../components/Header/Header'
import {IStore} from "../../store"
import {connect} from "react-redux"
// Styles
import {Wrapper, TypeSettingSection} from "./styles"

class Setting extends React.Component<ISettingProps, ISettingState> {
  constructor(props: ISettingProps) {
    super(props)
  }

  private onChangeType = (event: React.ChangeEvent<any>) => {
    this.setState({ selectedType: event.target.value })
    this.props.updateSettingType(event.target.value)
    this.props.updateAxios(event.target.value)
  }

  public render() {
    const {setting} = this.props
    return (
      <Wrapper>
        <Header/>
        <TypeSettingSection>
          <h3>Which one would you prefer?</h3>
          <FormControl fullWidth={true}>
            <RadioGroup value={setting.type} onChange={this.onChangeType}>
              <FormControlLabel value="CAT" control={<Radio/>} label="CAT"/>
              <FormControlLabel value="DOG" control={<Radio/>} label="DOG"/>
            </RadioGroup>
          </FormControl>
        </TypeSettingSection>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  setting: state.setting
})

const mapDispatchToProps: ISettingActionProps = {
  updateAxios,
  updateSettingType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
