import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import ShoppingIcon from '../../../components/shoppingCart/shoppingIcon/ShoppingIcon'
import './PayShoppingPage.scss'
import Partner from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'

export class PayShoppingPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container pay">
          <div className="pay-title title-component">
            <p>
              <span>THANH TOÁN</span>
            </p>
          </div>
          <ShoppingIcon />
          <div className="pay-content">
            <form>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 payment-step">
                  <div className="user box">
                    <div className="title">
                      <span>1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</span>
                    </div>
                    <div className="user-infor border">
                      <div className="infor-pay">
                        <h6>THÔNG TIN THANH TOÁN</h6>
                        <Link className="link line" to="#">
                          Đăng ký tài khoản mua hàng
                        </Link>
                        <Link className="link" to="#">
                          Đăng nhập
                        </Link>
                      </div>
                      <div className="infor-form">
                        <div className="form-group mt-2">
                          <label className="bold">
                            Mua hàng không cần tài khoản
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Họ và Tên"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Số điện thoại"
                            id="number"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Địa chỉ"
                            id="address"
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control" id="sel1">
                            <option>Vui lòng chọn tỉnh/thành phố</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <select className="form-control" id="sel2">
                            <option>Vui lòng chọn quận/huyện</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Ghi chú đơn hàng"
                            rows="4"
                            id="comment"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label className="bold"> THÔNG TIN GIAO HÀNG</label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              defaultValue
                            />
                            Giao hàng địa chỉ khác
                          </label>
                        </div>

                        <div className="check-child">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Họ và Tên"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Số điện thoại"
                              id="number"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              id="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Địa chỉ"
                              id="address"
                            />
                          </div>
                          <div className="form-group">
                            <select className="form-control" id="sel1">
                              <option>Vui lòng chọn tỉnh/thành phố</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select className="form-control" id="sel2">
                              <option>Vui lòng chọn quận/huyện</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 payment-step">
                  <div className="train box">
                    <div className="title">
                      <span>2. THANH TOÁN VÀ VẬN CHUYỂN</span>
                    </div>
                    <div className="train-infor border">
                      <div className="form-group">
                        <label className="bold">VẬN CHUYỂN </label>
                        <select className="form-control" id="sel1">
                          <option>Hình thức vận chuyển </option>
                          <option>J&T Express</option>
                          <option>Viettel Post</option>
                          <option>Ninja Van</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="bold">THANH TOÁN </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 payment-step">
                  <div className="product box">
                    <div className="title">
                      <span>3. THÔNG TIN ĐƠN HÀNG</span>
                    </div>
                    <div className="cart-infor border">
                      <div className="name line-bottom ">
                        <div className="image parent">
                          <Link to="#">
                            <img
                              className="child"
                              src={'assets/images/sup_cua_large.jpg'}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="product">Xà lách trộn kiểu Nga x 1</div>
                        <div className="price bold">59,000 ₫</div>
                      </div>
                      <div className="total-price line-bottom ">
                        <span className="bold">Thành Tiền</span>
                        <span className="float-right bold">59,000 ₫</span>
                      </div>
                      <div className="shiping-price line-bottom ">
                        <span className="bold">Phí vận chuyển</span>
                        <span className="float-right bold">0 ₫</span>
                      </div>
                      <div className="total-payment line-bottom ">
                        <span className="bold">Thanh Toán</span>
                        <span className="sum float-right bold mb-3">0 ₫</span>
                      </div>
                      <div className="clearfix button">
                        <Link
                          to="/finish"
                          className="btn btn-dark float-right mt-3"
                        >
                          ĐẶT HÀNG
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default PayShoppingPage
