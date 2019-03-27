import React, {Component} from 'react';
import Home from './pages/Home/Home'
import './App.scss'
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home}/>
      </Router>
    );
  }
}


export default App;
