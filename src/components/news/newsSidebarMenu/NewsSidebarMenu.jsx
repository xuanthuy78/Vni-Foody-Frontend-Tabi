import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsSidebarMenu extends Component {
  render() {
    return (
      <div className="news-sidebar-top sidebar-components">
        <h3 className="title">
          Sản phẩm
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        <ul className="nav nav-pills flex-column menu-main">
          <li className="nav-item">
            <Link className="nav-link" to="/news-category">
              Tin khuyến mãi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news-category">
              Tin ẩm thực
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NewsSidebarMenu
