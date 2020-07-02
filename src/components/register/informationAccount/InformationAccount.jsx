import React, { Component } from 'react'
import './InformationAccount.scss'

export class InformationAccount extends Component {
  render() {
    return (
      <div className="register-bottom">
        <div
          className="register-content clearfix ng-scope"
          ng-controller="accountController"
          ng-init="initRegisterController()"
        >
          <h1 className="title">
            <span>Đăng ký tài khoản</span>
          </h1>
          <div className="col-xl-8 col-lg-8  col-md-12 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-0 col-sm-offset-0 col-offset-0">
            <form
              className="form-horizontal ng-pristine ng-invalid ng-invalid-required ng-valid-email"
              ng-submit="register()"
            >
              <h2 className="title-account">
                <span>Thông tin tài khoản</span>
              </h2>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Tài khoản<span className="warning">(*)</span>
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Email<span className="warning">(*)</span>
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="email"
                    className="form-control ng-pristine ng-untouched ng-valid-email ng-invalid ng-invalid-required"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Mật khẩu<span className="warning">(*)</span>
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="password"
                    className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label repyte-password">
                  Nhập lại mật khẩu<span className="warning">(*)</span>
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 input-pasword">
                  <input
                    type="password"
                    className="form-control ng-pristine ng-untouched ng-valid enter-password"
                  />
                </div>
              </div>
              <h2 className="title-account">
                <span>Thông tin cá nhân</span>
              </h2>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Họ tên<span className="warning">(*)</span>
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Giới tính
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <select className="form-control ng-pristine ng-untouched ng-valid">
                    <option value="number:0" label="Nữ">
                      Nữ
                    </option>
                    <option value="number:1" label="Nam">
                      Nam
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group ">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label ">
                  Ngày sinh
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="date"
                    className="form-control ng-pristine ng-untouched ng-valid"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Điện thoại
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control ng-pristine ng-untouched ng-valid"
                    ng-model="Phone"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Địa chỉ
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control ng-pristine ng-untouched ng-valid"
                    ng-model="Address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Tỉnh/TP
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <select
                    className="form-control ng-pristine ng-untouched ng-valid"
                    ng-change="getDistricts(ProvinceId)"
                  >
                    <option value="number:62" label="Tuyên Quang">
                      Tuyên Quang
                    </option>
                    <option value="number:63" label="Vĩnh Long">
                      Vĩnh Long
                    </option>
                    <option value="number:64" label="Vĩnh Phúc">
                      Vĩnh Phúc
                    </option>
                    <option value="number:65" label="Yên Bái">
                      Yên Bái
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                  Quận/Huyện
                </label>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <select className="form-control ng-pristine ng-untouched ng-valid">
                    <option value="number:54" label="Huyện Nhà Bè">
                      Huyện Nhà Bè
                    </option>
                    <option value="number:55" label="Huyện Cần Giờ">
                      Huyện Cần Giờ
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group last-form">
                <div className=" col-sm-offset-4 col-md-8 col-sm-8">
                  <button type="submit" className="btn btn-primary ">
                    Đăng ký
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default InformationAccount
