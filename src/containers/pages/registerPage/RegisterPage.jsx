import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarAccount from '../../../components/layout/sidebarAccount/SidebarAccount'
import { Partner } from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'
import './RegisterPage.scss'
import { InformationAccount } from '../../../components/register/index'

export class RegisterPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="register-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <SidebarAccount />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="register-menu menu-title">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <span className="title">Trang chủ</span>
                      </Link>
                    </li>
                    <li className="nav-item icon-link">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="#">
                        <span>Đăng ký tài khoản</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <InformationAccount />
              </div>
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default RegisterPage
