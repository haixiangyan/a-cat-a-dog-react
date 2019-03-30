import * as React from 'react'
// Material UI
import TextField from '@material-ui/core/TextField'
// Types
import {ILoginProps, ILoginState} from "./index"
// Styles
import {Wrapper, LoginButton, Avatar} from './styles'

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      subId: ''
    }
  }

  private onChangeSubId = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      subId: event.target.value
    })
  }

  public render() {
    const {subId} = this.state
    return (
      <Wrapper>
        <Avatar src="https://i.loli.net/2019/03/30/5c9eeddca1a43.jpg" alt="bg"/>
        <section>
          <TextField
            id="standard-name"
            label="User Name"
            value={subId}
            onChange={this.onChangeSubId}
            margin="normal"
            variant="outlined"
          />
        </section>
        <LoginButton variant="contained" color="primary">
          Login
        </LoginButton>
      </Wrapper>
    )
  }
}

export default Login
