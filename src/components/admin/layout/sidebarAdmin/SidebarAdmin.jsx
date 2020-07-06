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
        <ul className="navbar-nav" id="accordion">
          <li className="nav-item">
            <NavLink
              activeClassName="selected"
              exact
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
              className="nav-link parent"
              activeClassName="selected"
              to="/admin/category"
            >
              <span className="icon">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              </span>
              <span className="title">Danh mục</span>
            </NavLink>
          </li>
        </ul>
      </section>
    )
  }
}

export default SidebarAdmin
