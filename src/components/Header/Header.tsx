import * as React from 'react'
// Material UI
import Icon from '@material-ui/core/Icon'
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Grow from "@material-ui/core/Grow"
import Popper from "@material-ui/core/Popper"
import Fade from "@material-ui/core/Fade"
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuItem from '@material-ui/core/MenuItem'
// Styles
import {Wrapper, UserButton, UserName, SettingButton} from "./styles"
// Types
import {IHeaderProps, IHeaderState} from "./index"
import {Link} from "react-router-dom"

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {
      isOpenUser: false,
      userEl: null,
      isOpenSetting: false,
      settingEl: null
    }
  }

  private toggleUser = (event: any) => {
    this.setState({
      userEl: event.currentTarget,
      isOpenUser: !this.state.isOpenUser,
    });
  }

  private toggleSetting = (event: any) => {
    this.setState({
      settingEl: event.currentTarget,
      isOpenSetting: !this.state.isOpenSetting,
    })
  }

  public render() {
    const {isOpenUser, userEl, isOpenSetting, settingEl} = this.state
    return (
      <Wrapper>
        <UserButton onClick={this.toggleUser}> <Icon>person</Icon> </UserButton>
        <Link to="/"><Button>🐱A🐶</Button></Link>
        <SettingButton onClick={this.toggleSetting}><Icon>settings</Icon></SettingButton>

        <Popper open={isOpenSetting} anchorEl={settingEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <Paper>
                <ClickAwayListener onClickAway={this.toggleSetting}>
                  <MenuList>
                    <MenuItem><Link to="/setting">General Setting</Link></MenuItem>
                    <MenuItem><Link to="/votes">Voted Images</Link></MenuItem>
                    <MenuItem><Link to="/favourites">Favourite Images</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        <Popper placement="bottom-start" open={isOpenUser} anchorEl={userEl} transition>
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
