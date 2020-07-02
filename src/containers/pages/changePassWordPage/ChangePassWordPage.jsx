import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarUser from '../../../components/layout/sidebarUser/SidebarUser'
import './ChangePassWordPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'
export class ChangePassWordPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="container">
          <div className="changepassword">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <SidebarUser />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="changepassword-menu menu-title">
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
                        <span>Thay đổi mật khẩu</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="changepassword-content">
                  <h1 className="title">
                    <span>THAY ĐỔI MẬT KHẨU</span>
                  </h1>
                  <div className="col-xl-8 col-lg-8  col-md-12 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-0 col-sm-offset-0 col-offset-0">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">
                          Mật khẩu cũ
                        </label>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                          <input type="email" className="form-control " />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label">
                          Mật khẩu mới
                        </label>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                          <input
                            type="password"
                            className="form-control"
                            ng-model="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 control-label password">
                          Nhập lại mật khẩu
                        </label>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
                          <input
                            type="password"
                            className="form-control"
                            ng-model="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group button-login">
                        <div className=" col-sm-offset-4 col-md-7 col-sm-7">
                          <button type="submit" className="btn btn-primary">
                            CẬT NHẬT
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ChangePassWordPage
