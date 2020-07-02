import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SidebarIntroduce extends Component {
  render() {
    return (
      <div className="introduce-sidebar sidebar-components">
        <h3 className="title">
          Giới thiệu
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        <ul className="nav nav-pills flex-column menu-main">
          <li className="nav-item">
            <Link className="nav-link" to="/introduce-detail/about-us">
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              Về chúng tôi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/introduce-detail/scope-activities">
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              Lĩnh vực hoạt động
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SidebarIntroduce
