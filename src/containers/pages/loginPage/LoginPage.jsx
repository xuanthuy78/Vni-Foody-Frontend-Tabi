import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarAccount from '../../../components/layout/sidebarAccount/SidebarAccount'
import './LoginPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'
import { InformationLogin } from '../../../components/login/index'
export class LoginPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="login-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <SidebarAccount />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="login-menu menu-title">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <span>Trang chủ</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link icon-link" to="#">
                        <i
                          className="fa fa-angle-double-right "
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link " to="#">
                        <span>Đăng nhập</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <InformationLogin />
              </div>
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default LoginPage
