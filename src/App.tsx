import React, {Component} from 'react';
import { catAxios, dogAxios } from "./axios"
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
    const response = await catAxios.get('/images/search')
    const votes = await catAxios.get('/votes?sub_id=hai_test')
    console.log(votes)
    this.setState({
      animals: response.data
    })
  }

  private vote = async () => {
    const { animals } = this.state
    await catAxios.post('/votes', {
      image_id: 'eUKD6V2pm',
      sub_id: 'hai_test',
      value: 1
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
              <Button onClick={this.vote}>Vote</Button>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

export default App;
