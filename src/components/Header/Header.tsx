import * as React from 'react'
// Material UI
import Icon from '@material-ui/core/Icon'
import Button from "@material-ui/core/Button"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
// Styles
import {Wrapper, UserButton, UserName, SettingButton} from "./styles"
// Types
import {IHeaderProps, IHeaderState} from "./index"

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {
      popperEl: null,
      isOpenUser: false,
    }
  }

  private openUser = (event: any) => {
    const {currentTarget} = event
    this.setState({
      popperEl: currentTarget,
      isOpenUser: !this.state.isOpenUser,
    });
  }

  public render() {
    const {isOpenUser, popperEl} = this.state
    return (
      <Wrapper>
        <UserButton onClick={this.openUser}> <Icon>person</Icon> </UserButton>
        <Button href="/">🐱A🐶</Button>
        <SettingButton href="/setting"> <Icon>settings</Icon> </SettingButton>

        <Popper placement="bottom-start" open={isOpenUser} anchorEl={popperEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <UserName>hai_test</UserName>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Wrapper>
    )
  }
}

export default Header
