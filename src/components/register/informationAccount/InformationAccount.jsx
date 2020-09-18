import React, { Component, Fragment } from 'react'
import './InformationAccount.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../actions'
import { Spin } from 'antd'
import { Redirect } from 'react-router-dom'

export class InformationAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        fullname: '',
        gender: '',
        birthday: '',
        phone: '',
        address: '',
      },
      loading: false,
      success: false,
      message: [],
    }
  }
  handleInput = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    })
  }
  onRegisterUser = async (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    await this.props.actions.register(this.state.user).then(this.handleRegister)
  }

  handleRegister = (res) => {
    if (res.error) {
      this.setState({ ...this.state, loading: false, message: res.error.response.data.message })
    }
  }
  render() {
    const { message, loading } = this.state
    return (
      <Fragment>
        {this.props.status === 'success' && <Redirect to="/home" />}
        <div className="register-bottom">
          <div className="register-content clearfix">
            <h1 className="title">
              <span>Đăng ký tài khoản</span>
            </h1>
            <Spin spinning={loading}>
              <div className="col-xl-8 col-lg-8  col-md-12 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-0 col-sm-offset-0 col-offset-0">
                <form className="form-horizontal" onSubmit={this.onRegisterUser}>
                  <h2 className="title-account">
                    <span>Thông tin tài khoản</span>
                  </h2>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                      Tài khoản<span className="warning">(*)</span>
                    </label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="text" name="name" onChange={this.handleInput} className="form-control" />
                      {message && message.name && <div className="show_error">{message.name.join()}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                      Email<span className="warning">(*)</span>
                    </label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="email" name="email" onChange={this.handleInput} className="form-control" />
                      {message && message.email && <div className="show_error">{message.email.join()}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">
                      Mật khẩu<span className="warning">(*)</span>
                    </label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="password" name="password" onChange={this.handleInput} className="form-control" />
                      {message && message.password && <div className="show_error">{message.password.join()}</div>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label repyte-password">
                      Nhập lại mật khẩu<span className="warning">(*)</span>
                    </label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 input-pasword">
                      <input type="password" name="cpassword" onChange={this.handleInput} className="form-control" />
                      {message && message.cpassword && <div className="show_error">{message.cpassword.join()}</div>}
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
                      <input type="text" name="fullname" onChange={this.handleInput} className="form-control " />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">Giới tính</label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <select className="form-control " name="gender" onChange={this.handleInput}>
                        <option>Chọn giới tính</option>
                        <option value="0" label="Nữ">
                          Nữ
                        </option>
                        <option value="1" label="Nam">
                          Nam
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label ">Ngày sinh</label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="date" name="birthday" onChange={this.handleInput} className="form-control " />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">Điện thoại</label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="text" name="phone" onChange={this.handleInput} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 control-label">Địa chỉ</label>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                      <input type="text" name="address" onChange={this.handleInput} className="form-control " />
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
            </Spin>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  status: state.auth.status,
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(InformationAccount)
