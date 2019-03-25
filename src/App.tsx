import React, {Component} from 'react';
import axios from 'axios'
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

interface IProps { }
interface IState {
  animals: any[]
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      animals: []
    }
  }

  public async componentDidMount() {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    console.log(response)
    this.setState({
      animals: response.data
    })
  }

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
        {
          this.state.animals.map(animal =>
            <div key={animal.id}>
              <img src={animal.url} alt="animalImg"/>
              <div>
                {JSON.stringify(animal)}
              </div>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

export default App;
