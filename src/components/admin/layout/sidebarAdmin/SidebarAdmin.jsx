import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <Link className="nav-link parent" to="/admin/product">
              <span className="icon">
                <i className="fa fa-product-hunt fa-lg" aria-hidden="true"></i>
              </span>
              <span className="title">Product</span>
              <span className="arrive">
                <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link parent"
              data-toggle="collapse"
              to={{ pathname: '#product' }}
            >
              <span className="icon">
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              </span>
              <span className="title">New</span>
              <span className="arrive">
                <i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
              </span>
            </Link>
            <ul
              id="product"
              data-parent="#accordion"
              className="navbar-nav collapse children"
            >
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="mr-3 fa fa-list-ul" aria-hidden="true"></i>
                  <span className="item title">List</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i
                    className="mr-3 item fa fa-plus-square-o"
                    aria-hidden="true"
                  ></i>
                  <span className="title">Created</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i
                    className="mr-3 item fa fa-pencil-square-o"
                    aria-hidden="true"
                  ></i>
                  <span className="item title">Edit</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
}

export default SidebarAdmin
