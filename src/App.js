import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'
import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import EachVideoDetails from './components/EachVideoDetails'

import ProtectedRoute from './ProtectedRoute'

import NotFound from './components/NotFound'

import ReactContext from './ReactContext'

const activeRout = {
  home: 'home',
  game: 'game',
  treding: 'trending',
  savedVideos: 'savedVideos',
}
class App extends Component {
  state = {
    isLightThemeActive: true,
    savedVideoslist: [],
    routeState: '',
  }

  changeTheme = () => {
    this.setState(prevstate => ({
      isLightThemeActive: !prevstate.isLightThemeActive,
    }))
  }

  clickedOnMenuBtn = () => {
    this.getAllVideos()
  }

  videosAddToState = videoObject => {
    const {savedVideoslist} = this.state
    const index = savedVideoslist.findIndex(each => each.id === videoObject.id)

    if (index === -1) {
      this.setState(prevstate => ({
        savedVideoslist: [...prevstate.savedVideoslist, videoObject],
      }))
    } else {
      this.setState({
        savedVideoslist: savedVideoslist.filter(
          eachVideo => eachVideo.id !== videoObject.id,
        ),
      })
    }
  }

  changeStateToChangeCOfRoute = () => {
    this.setState({routeState: activeRout.home})
  }

  changeStateToChangeCOfTrendingRoute = () => {
    this.setState({routeState: activeRout.treding})
  }

  changeStateToChangeCOfGamesRout = () => {
    this.setState({routeState: activeRout.game})
  }

  changeStateToChangeCOfSaveVideosRoute = () => {
    this.setState({routeState: activeRout.savedVideos})
  }

  render() {
    const {isLightThemeActive, savedVideoslist, routeState} = this.state
    return (
      <ReactContext.Provider
        value={{
          routeState,
          savedVideoslist,
          isLightThemeActive,
          changeTheme: this.changeTheme,
          videosAddToState: this.videosAddToState,
          changeStateToChangeCOfRoute: this.changeStateToChangeCOfRoute,
          changeStateToChangeCOfTrendingRoute:
            this.changeStateToChangeCOfTrendingRoute,
          changeStateToChangeCOfGamesRout: this.changeStateToChangeCOfGamesRout,
          changeStateToChangeCOfSaveVideosRoute:
            this.changeStateToChangeCOfSaveVideosRoute,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={EachVideoDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}
export default App
