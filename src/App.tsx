import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
