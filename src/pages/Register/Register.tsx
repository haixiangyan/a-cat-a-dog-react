import * as React from 'react'
// Router
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
// Redux
import {connect} from "react-redux"
import {initUser} from "../../store/user/actions"
import {updateAxios} from "../../store/axios/actions"
// Material UI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
// Types
import {IRegisterProps, IRegisterState} from "./index"
import {IStore} from "../../store"
// Styles
import {Avatar, LoginButton, Wrapper} from './styles'

class Register extends React.Component<IRegisterProps, IRegisterState> {
  constructor(props: IRegisterProps) {
    super(props)
    this.state = {
      subId: '',
      type: 'CAT'
    }
  }

  private onChangeSubId = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      subId: event.target.value
    })
  }

  private onChangeType = (event: any) => {
    this.setState({
      type: event.target.value
    })
  }

  private register = () => {
    const {subId, type} = this.state
    // Store in localStorage
    const user = { subId, type }
    localStorage.setItem('user', JSON.stringify(user))
    // Update redux
    this.props.initUser({subId})
    this.props.updateAxios(type)
    // Go to home page
    this.props.history.push('/')
  }

  public render() {
    const {subId, type} = this.state
    return (
      <Wrapper>
        <Avatar src="https://i.loli.net/2019/03/30/5c9efda85ee97.jpg" alt="avatar"/>
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
        <section>
          <p>I prefer...</p>
          <FormControl fullWidth={true}>
            <RadioGroup value={type} onChange={this.onChangeType}>
              <FormControlLabel value="CAT" control={<Radio/>} label="CAT"/>
              <FormControlLabel value="DOG" control={<Radio/>} label="DOG"/>
            </RadioGroup>
          </FormControl>
        </section>
        <section>
          <LoginButton onClick={this.register} variant="contained" color="primary">
            Get Started
          </LoginButton>
        </section>
        <small>
          Got a user name? <Link to="/login">login here</Link>
        </small>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore) => ({ })
const mapDispatchToProps = {
  initUser,
  updateAxios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register))
