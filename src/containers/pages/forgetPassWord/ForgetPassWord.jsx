import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarAccount from '../../../components/layout/sidebarAccount/SidebarAccount'
import { Partner } from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'
import './ForgetPassWord.scss'
import { InformationConfim } from '../../../components/forgetPassWord/index'

export class ForgetPassWord extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="forgetpassword-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <SidebarAccount />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="forgetpassword-menu menu-title">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Trang chủ
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
                        <span>Quên mật khẩu</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <InformationConfim />
              </div>
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ForgetPassWord
