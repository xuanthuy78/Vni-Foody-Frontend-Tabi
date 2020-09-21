import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { routes_not_auth, routes_auth } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'font-awesome/css/font-awesome.min.css'
import 'antd/dist/antd.css'
import MasterLayoutAdmin from './components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { MasterLayout } from './components/layout'
import NotFoundPage from './containers/pages/notFoundPage/NotFoundPage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import { Redirect } from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {!this.props.auth && <Redirect to="/home"></Redirect>}
          <Switch>
            {this.props.user && this.props.user.is_admin === 1 && (
              <Route path={routes_auth.map((item) => item.path)}>
                <MasterLayoutAdmin>
                  <Switch>
                    {routes_auth.map((route, index) => {
                      return (
                        <Route key={`auth-${index}`} path={route.path} exact={route.exact} component={route.main} />
                      )
                    })}
                  </Switch>
                </MasterLayoutAdmin>
              </Route>
            )}
            <Route path={routes_not_auth.map((item) => item.path)}>
              <MasterLayout>
                <Switch>
                  {routes_not_auth.map((route, index) => {
                    return (
                      <Route key={`not-auth-${index}`} exact={route.exact} path={route.path} component={route.main} />
                    )
                  })}
                </Switch>
              </MasterLayout>
            </Route>
            <MasterLayout>
              <Route path="*" component={NotFoundPage} />
            </MasterLayout>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.token,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
