import * as React from 'react'
// Material UI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
// Types
import {IRegisterProps, IRegisterState} from "./index"
// Styles
import {Wrapper, Avatar} from './styles'
import {Link} from "react-router-dom"

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

  public render() {
    const {subId, type} = this.state
    return (
      <Wrapper>
        <Avatar src="https://i.loli.net/2019/03/30/5c9ef392cce79.jpg" alt="avatar"/>
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
        <small>
          Got a user name? <Link to="/login">login here</Link>
        </small>
      </Wrapper>
    )
  }
}

export default Register
