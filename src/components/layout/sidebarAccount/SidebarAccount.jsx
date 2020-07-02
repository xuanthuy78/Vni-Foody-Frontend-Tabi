import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SidebarAccount.scss'

export class SidebarAccount extends Component {
  render() {
    return (
      <div className="sidebar-account">
        <div className="sidebar-title">
          <h3 className="title">
            Tài khoản
            <i className="fa fa-bars float-right" aria-hidden="true" />
          </h3>
        </div>
        <ul className="nav nav-pills flex-column menu-main">
          <li className="nav-item">
            <Link className="nav-link silebar-border " to="/LoginPage">
              <i className="fa fa-sign-out " aria-hidden="true" />
              <span className="icon-text">Đăng nhập </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link silebar-border" to="/RegisterPage">
              <i className="fa fa-key " aria-hidden="true" />
              <span className="icon-text">Đăng ký</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forgetPassWord">
              <i className="fa fa-key " />
              <span className="icon-text">Quên mật khẩu</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default SidebarAccount
