import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SidebarAdmin extends Component {
  render() {
    return (
      <section
        className={
          this.props.showSidebar ? 'sidebar-menu' : 'sidebar-menu-button'
        }
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link parent"
              activeClassName="selected"
              to="/admin/category"
            >
              <span className="icon">
                <i className="fa fa-list-alt" aria-hidden="true"></i>
              </span>
              <span className="title">Danh mục</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/product"
            >
              <span className="icon">
                <i className="fa fa-product-hunt fa-lg" aria-hidden="true"></i>
              </span>
              <span className="title">Sản Phẩm</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/order"
            >
              <span className="icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="title">Đơn Hàng</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/news"
            >
              <span className="icon">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              </span>
              <span className="title">Bài Viết</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/slide"
            >
              <span className="icon">
                <i className="fa fa-slideshare" aria-hidden="true"></i>
              </span>
              <span className="title">Slider</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/brand"
            >
              <span className="icon">
                <i className="fa fa-meetup" aria-hidden="true"></i>
              </span>
              <span className="title">Thương hiệu</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              className="nav-link parent"
              to="/admin/user"
            >
              <span className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="title">Người dùng</span>
            </NavLink>
          </li>
        </ul>
      </section>
    )
  }
}

export default SidebarAdmin
