import * as React from 'react'
// Redux
import {ISettingActionProps, ISettingProps, ISettingState} from "./index"
import {updateAxios} from "../../store/axios/actions"
import {updateUser} from "../../store/user/actions"
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
import {TypeSettingSection, Wrapper} from "./styles"

class Setting extends React.Component<ISettingProps, ISettingState> {
  constructor(props: ISettingProps) {
    super(props)
  }

  private onChangeType = (event: React.ChangeEvent<any>) => {
    this.props.updateUser({...this.props.user, type: event.target.value})
    this.props.updateAxios(event.target.value)
  }

  public render() {
    const {user} = this.props
    return (
      <Wrapper>
        <Header/>
        <TypeSettingSection>
          <h3>Which one would you prefer?</h3>
          <FormControl fullWidth={true}>
            <RadioGroup value={user.type} onChange={this.onChangeType}>
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
  user: state.user
})

const mapDispatchToProps: ISettingActionProps = {
  updateAxios,
  updateUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
