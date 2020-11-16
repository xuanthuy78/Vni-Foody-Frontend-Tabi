import React, { Component, Fragment } from 'react'
import './InformationLogin.scss'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions/index'
import { Spin } from 'antd'

// let unmount = false
export class InformationLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        email: '',
        password: '',
      },
      loading: false,
    }
  }

  // componentWillUnmount() {
  //   unmount = true
  // }

  handleInputLogin = (e) => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value,
      },
    })
  }
  onLogin = async (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    await this.props.actions.authLogin(this.state.login).then(this.handleAuth)
    // !unmount && this.setState({ loading: false })
  }

  handleAuth = (res) => {
    if (res.error) {
      let msg = 'Đăng nhập không thành công, vui lòng thử lại'
      return this.setState({ error: msg, loading: false })
    }
  }

  render() {
    const { auth } = this.props
    return (
      <Fragment>
        {auth && <Redirect to="/home" />}
        <div className="login-content">
          <h1 className="title">
            <span>ĐĂNG NHẬP HỆ THỐNG</span>
          </h1>
          <Spin spinning={this.state.loading}>
            <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12 offset-xl-3 offset-lg-3 offset-md-0 col-sm-offset-0 col-offset-0">
              <form className="form-horizontal" onSubmit={this.onLogin}>
                <div className="form-group">
                  <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">Email</label>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                    <input
                      type="email"
                      name="email"
                      value={this.state.login.email}
                      onChange={this.handleInputLogin}
                      className="form-control "
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">Mật khẩu</label>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleInputLogin}
                      value={this.state.login.password}
                      className="form-control"
                    />
                  </div>
                </div>
                {this.state.error && (
                  <div className="alert alert-danger" role="alert">
                    {this.state.error}
                  </div>
                )}
                <div className="form-group button-login">
                  <div className="offset-md-4 col-md-12 col-sm-12 col-12">
                    <button type="submit" className="btn btn-primary">
                      Đăng nhập
                    </button>
                    <Link to="/forgetPassWord" className="forgetpassword">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </Spin>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(InformationLogin)
