import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
// Pages
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'
import Vote from './pages/Vote/Vote'
import Favourite from './pages/Favourite/Favourtie'
// App Styles
import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/setting" component={Setting}/>
        <Route path="/vote" component={Vote}/>
        <Route path="/favourite" component={Favourite}/>
      </Router>
    );
  }
}


export default App;
