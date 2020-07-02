import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../../logo.png'
import LogoMobi from '../../../../logo-mobi.png'

export class HeaderAdmin extends Component {
  handleShowSideBar = () => {
    this.props.showSidebar()
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="border-logo">
            <div className="screen-668">
              <Link to="/admin">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="screen-mobi">
              <Link to="/admin">
                <img className="images-logo" src={LogoMobi} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="btn-toggler ml-5">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleShowSideBar}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="information collapse navbar-collapse justify-content-end">
            {/*Show when screen > 496*/}
            <ul className="navbar-nav screen-496">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="badge badge-danger">22</span>
                  <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  <span className="badge badge-danger">8</span>
                  <i
                    className="fa fa-commenting-o fa-lg"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li className="nav-item clock">
                <Link className="nav-link name" to="#">
                  <span className="fullname mr-2">Valerie Luna</span>
                  <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
            {/*Show when screen 486*/}
            <ul className="navbar-nav screen-mobi">
              <li className="nav-item">
                <Link className="nav-link name" to="#">
                  <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
                </Link>
              </li>
              <ul className="navbar-nav childen">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Valerie Luna
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Thông báo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Đăng xuất
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default HeaderAdmin
