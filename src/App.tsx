import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom"
// Redux
import {IStore} from "./store"
import {connect} from "react-redux"
// Material UI
import Card from '@material-ui/core/Card'
// Pages
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'
import Votes from './pages/Votes/Votes'
import Favourites from './pages/Favourites/Favourties'
import Register from './pages/Register/Register'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// App Styles
import './App.scss'
// Types
import {IAppActionProps, IAppProps} from "./env"

class App extends Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props)
  }

  public render() {
    return (
      <Router>
        <Card id="app-wrapper" className="app-wrapper">
          <PrivateRoute path="/" exact={true} component={Home}/>
          <PrivateRoute path="/setting" component={Setting}/>
          <PrivateRoute path="/votes" component={Votes}/>
          <PrivateRoute path="/favourites" component={Favourites}/>
          <Route path="/register" component={Register}/>
        </Card>
      </Router>
    );
  }
}

const mapStateToProps = (state: IStore) => ({})
const mapDispatchToProps: IAppActionProps = { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
