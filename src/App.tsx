import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom"
// Redux
import {IStore} from "./store"
import {updateAxios} from "./store/axios/actions"
import {initBreeds} from "./store/breeds/actions"
import {initCategories} from "./store/categories/actions"
// Material UI
import Card from '@material-ui/core/Card'
// Pages
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'
import Votes from './pages/Votes/Votes'
import Favourites from './pages/Favourites/Favourties'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
// App Styles
import './App.scss'
import {connect} from "react-redux"
import {IAppActionProps, IAppProps, IBreed, ICategory} from "./env"
// Services
import breedsService from './services/breeds'
import categoriesService from './services/categories'

class App extends Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props)
  }

  public async componentDidMount() {
    // Init animal type
    this.props.updateAxios('CAT')
    // Init animal categories
    const categories: Array<ICategory> = await categoriesService.getCategories()
    this.props.initCategories(categories)
    // Init a breed list
    const breeds: Array<IBreed> = await breedsService.getBreeds()
    this.props.initBreeds(breeds)
  }

  public render() {
    return (
      <Router>
        <Card id="app-wrapper" className="app-wrapper">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/votes" component={Votes}/>
          <Route path="/favourites" component={Favourites}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Card>
      </Router>
    );
  }
}

const mapStateToProps = (state: IStore) => ({})
const mapDispatchToProps: IAppActionProps = {
  initBreeds,
  initCategories,
  updateAxios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
