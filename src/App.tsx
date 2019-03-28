import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
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
import Vote from './pages/Vote/Vote'
import Favourite from './pages/Favourite/Favourtie'
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
        <Card className="app-wrapper">
          <Route path="/" exact={true} component={Home}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/vote" component={Vote}/>
          <Route path="/favourite" component={Favourite}/>
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
