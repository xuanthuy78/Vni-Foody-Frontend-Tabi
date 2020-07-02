import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SidebarUser.scss'

export class SidebarUser extends Component {
  render() {
    return (
      <div className="sidebar-account">
        <div className="sidebar-title">
          <h3 className="title">
            QUẢN LÝ CÁ NHÂN
            <i className="fa fa-bars float-right" aria-hidden="true" />
          </h3>
        </div>
        <ul className="nav nav-pills flex-column menu-main">
          <li className="nav-item">
            <Link className="nav-link silebar-border " to="/#">
              <i className="fa fa-user" aria-hidden="true" />
              <span className="icon-text">Thông tin cá nhân </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link silebar-border" to="/mycart">
              <i className="fa fa-list-alt" aria-hidden="true" />
              <span className="icon-text">Đơn hàng của tôi</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link silebar-border" to="/#">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <span className="icon-text">Sản phẩm yêu thích</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link silebar-border" to="/changepassword">
              <i className="fa fa-key " />
              <span className="icon-text">Thay đổi mật khẩu</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <i className="fa fa-sign-out" aria-hidden="true" />
              <span className="icon-text">Thoát</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default SidebarUser
