import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { routes_not_auth, routes_auth } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'font-awesome/css/font-awesome.min.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './store/configureStore'
import MasterLayoutAdmin from './components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'

export class App extends Component {
  // showRouters = (routes) => {
  //   var result = null
  //   if (routes.length > 0) {
  //     result = routes.map((route, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           path={route.path}
  //           exact={route.exact}
  //           component={route.main}
  //         />
  //       )
  //     })
  //   }
  //   return <Switch>{result}</Switch>
  // }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <MasterLayoutAdmin>
              {routes_auth.map((route, index) => {
                return (
                  <Route
                    key={`auth-${index}`}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                )
              })}
            </MasterLayoutAdmin>

            {routes_not_auth.map((route, index) => {
              return (
                <Route
                  key={`not-auth-${index}`}
                  path={route.path}
                  component={route.main}
                />
              )
            })}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
