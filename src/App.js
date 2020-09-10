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
import { MasterLayout } from './components/layout'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <MasterLayout>
              <Route path={routes_not_auth.map((item) => item.path)}>
                <Switch>
                  {routes_not_auth.map((route, index) => {
                    return (
                      <Route
                        key={`not-auth-${index}`}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                      />
                    )
                  })}
                </Switch>
              </Route>
            </MasterLayout>
            <MasterLayoutAdmin>
              <Route path={routes_auth.map((item) => item.path)}>
                <div style={{ zIndex: 9999 }}> ADMIN PAGE</div>
                <Switch>
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
                </Switch>
              </Route>
            </MasterLayoutAdmin>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
