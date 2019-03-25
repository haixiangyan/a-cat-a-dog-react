import React, {Component} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import Child from './Child'
import './App.scss'

const Wrapper = styled.div`
  text-align: center;
  color: red;
  .change {
    color: green;
  }
`

class App extends Component {
  render() {

    return (
      <Wrapper>
        Test
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className="change">
          Change Color
        </div>
        <Child/>
        <div className="hello">
          Yes
        </div>
      </Wrapper>
    );
  }
}

export default App;
