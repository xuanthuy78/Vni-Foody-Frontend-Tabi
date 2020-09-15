import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import HeaderMenu from '../headerMenu/HeaderMenu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import { AUTH_LOGOUT } from '../../../constants/ActionTypes'

export class Header extends Component {
  componentDidMount() {
    this.props.actions.checkLogin()
  }
  render() {
    const { auth, logout, user } = this.props
    console.log(user)
    return (
      <header className="header-container">
        <div className="container">
          <section className="header-link">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <nav className="navbar navbar-expand-md navbar-dark nav-hidden-sm">
                  {/* Brand */}
                  <Link className="navbar-brand" to="#">
                    <i className="fa fa-phone" />
                    Hotline:0908770095
                  </Link>
                  {/* Navbar links */}
                  <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/checkorder">
                          <i className="fa fa-pencil-square-o" />
                          Kiểm tra đơn hàng
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/shopping-cart">
                          <i className="fa fa-shopping-cart" />
                          Giỏ hàng
                        </Link>
                      </li>

                      {!auth ? (
                        <Fragment>
                          <li className="nav-item">
                            <Link className="nav-link" to="/loginPage">
                              <i className="fa fa-sign-in" />
                              Đăng nhập
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/registerPage">
                              <i className="fa fa-key" />
                              Đăng ký
                            </Link>
                          </li>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                              Admin
                            </Link>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link" onClick={logout}>
                              <i className="fa fa-user" />
                              {user.name}
                            </span>
                          </li>
                          <li className="nav-item">
                            <span className="nav-link" onClick={logout}>
                              <i className="fa fa-sign-out" />
                              Đăng xuất
                            </span>
                          </li>
                        </Fragment>
                      )}
                    </ul>
                  </div>
                </nav>
                {/*Small devices (landscape phones, 576px and up)*/}
                <div className="navbar-sm">
                  <div className="row">
                    <div className="col-sm-6 col-6 nav-menu">
                      <nav className="navbar navbar-expand-md navbar-dark ">
                        {/* Brand */}
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapsibleNavbar"
                        >
                          <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                        {/* Navbar links */}
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link className="nav-link" to="#">
                                Trang Chủ
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#">
                                Sản Phẩm
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#">
                                Tin Tức
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#">
                                Giới thiệu
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="#">
                                Liên hệ
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div className="col-sm-6 col-6 nav-user">
                      <div className="user-icon">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              <i className="fa fa-user" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="user-content">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                              Admin
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              <i className="fa fa-pencil-square-o" />
                              Kiểm tra đơn hàng
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              <i className="fa fa-shopping-cart" />
                              Giỏ hàng
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              <i className="fa fa-sign-in" />
                              Đăng nhập
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="#">
                              <i className="fa fa-key" />
                              Đăng ký
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="header-content">
            <nav className="navbar navbar-light bg-light justify-content-between">
              <Link className="navbar-brand" to="#">
                <img src={'assets/images/logo.png'} alt="Logo" />
              </Link>
              <form className="form-inline">
                <div className="input-group">
                  <input type="text" name="search" id="txtsearch" className="form-control" placeholder="Tìm kiếm..." />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </section>

          {/*Header-Menu*/}
          <HeaderMenu />
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.token,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: AUTH_LOGOUT }),
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
