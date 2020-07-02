import React, { Component } from 'react'
import './InformationConfim.scss'
import { Link } from 'react-router-dom'

export class InformationConfim extends Component {
  render() {
    return (
      <div className="forgetpassword-bottom">
        <div className="forgetpassword-title">
          <h3 className="title">Quên mật khẩu</h3>
        </div>
        <div className="alert alert-info fade in">
          <button data-dismiss="alert" className="close" />
          <i className="fa-fw fa fa-check" />
          Điền vào email của bạn để yêu cầu một mật khẩu mới. Một Email sẽ được
          gửi đến địa chỉ này để xác minh địa chỉ Email của bạn.
        </div>
        <div className="offset-2 col-md-9  col-xs-12 col-sm-12 col-xs-offset-0 col-sm-offset-0">
          <form className="form-horizontal" ng-submit="forgetPassword()">
            <div className="form-group">
              <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">
                Email
              </label>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <input type="email" className="form-control" ng-model="Email" />
              </div>
            </div>
            <div className="form-group ">
              <div className="offset-md-4 col-md-12 col-sm-12 col-12">
                <button type="submit" className="btn btn-primary">
                  Gửi mật khẩu
                </button>
                <Link to="/LoginPage" className="register">
                  Quay lại đăng nhập
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default InformationConfim
