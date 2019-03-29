import * as React from 'react'
// Material UI
import Icon from '@material-ui/core/Icon'
// Styles
import {Wrapper, UserButton, SettingButton} from "./styles"

class Header extends React.Component {
  public render() {
    return (
      <Wrapper>
        <UserButton > <Icon>person</Icon> </UserButton>
        <span>🐱A🐶</span>
        <SettingButton > <Icon>settings</Icon> </SettingButton>
      </Wrapper>
    )
  }
}

export default Header
