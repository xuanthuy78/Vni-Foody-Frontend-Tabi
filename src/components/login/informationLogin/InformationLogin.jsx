import React, { Component } from 'react'
import './InformationLogin.scss'
import { Link } from 'react-router-dom'

export class InformationLogin extends Component {
  render() {
    return (
      <div className="login-content">
        <h1 className="title">
          <span>ĐĂNG NHẬP HỆ THỐNG</span>
        </h1>
        <div className="col-xl-6 col-lg-6  col-md-12 col-sm-12 col-12 offset-xl-3 offset-lg-3 offset-md-0 col-sm-offset-0 col-offset-0">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">
                Email
              </label>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                <input type="email" className="form-control " />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">
                Mật khẩu
              </label>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                <input
                  type="password"
                  className="form-control"
                  ng-model="Password"
                />
              </div>
            </div>
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
      </div>
    )
  }
}
export default InformationLogin
