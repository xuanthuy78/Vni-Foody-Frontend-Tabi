import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class HeaderMenu extends Component {
  render() {
    return (
      <section className="header-menu">
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              activeClassName="selected"
              to="/"
            >
              Trang Chủ
              <div className="menu-caret" />
            </NavLink>
          </li>
          <li className="menu-icon">/</li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="selected"
              to="/product"
            >
              Sản Phẩm
              <div className="menu-caret" />
            </NavLink>
          </li>
          <li className="menu-icon">/</li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="selected" to="/news">
              Tin Tức
              <div className="menu-caret" />
            </NavLink>
          </li>
          <li className="menu-icon">/</li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="selected"
              to="/introduce"
            >
              Giới thiệu
              <div className="menu-caret" />
            </NavLink>
          </li>
          <li className="menu-icon">/</li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="selected"
              to="/contactPage"
            >
              Liên hệ
              <div className="menu-caret" />
            </NavLink>
          </li>
        </ul>
      </section>
    )
  }
}

export default HeaderMenu
