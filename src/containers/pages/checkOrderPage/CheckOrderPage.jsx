import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './CheckOrderPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'

export class CheckOrderPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container">
          <div className="checkorder-menu menu-title">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item icon-link">
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  <span>Kiểm tra đơn hàng</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="about-order">
            <div className="order-title ">
              <h1 className="title">
                <span>KIỂM TRA ĐƠN HÀNG</span>
              </h1>
            </div>
            <div className="code-order">
              <form className="form-inline ">
                <div className="form-group">
                  <label>Nhập mã đơn hàng</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mã số đơn hàng (VD:123456789)"
                  />
                  <button className="btn btn-primary">Xem ngay</button>
                </div>
              </form>
            </div>
            <div className="information-order">
              <h2>Thông tin đơn hàng</h2>
              <div className="information-user">
                Đơn hàng của
                <Link to="#" className="ng-binding customer-name">
                  Hồ Thị Vừa
                </Link>
                <b className="ng-binding"> (#100000088)</b> lúc
                <span className="grey ng-binding">2020-06-17T13:46:22.477</span>
              </div>
              <div className="table-responsive table-mycart">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th colSpan={2}>Tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr ng-repeat="item in OrderDetails" className="ng-scope">
                      <td className="ng-binding">1</td>
                      <td className="image">
                        <Link to="/productdetail">
                          <img
                            src={'assets/images/sup_cua_large.jpg'}
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/productdetail"
                          className="ng-binding nameproduct"
                        >
                          Xà lách trộn kiểu Nga
                        </Link>
                      </td>
                      <td className="ng-binding">160000 đ</td>
                      <td className="ng-binding">2</td>
                      <td className="ng-binding">320,000 đ</td>
                    </tr>
                    <tr ng-repeat="item in OrderDetails" className="ng-scope">
                      <td className="ng-binding">2</td>
                      <td className="image">
                        <Link to="/productdetail">
                          <img
                            src={'assets/images/supreme_pizza_large.jpg'}
                            alt=""
                            className="img-responsive"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/productdetail"
                          className="ng-binding nameproduct"
                        >
                          Supreme
                        </Link>
                      </td>
                      <td className="ng-binding">269000 đ</td>
                      <td className="ng-binding">1</td>
                      <td className="ng-binding">269,000 đ</td>
                    </tr>
                    <tr className="information-total-order">
                      <td colSpan={3} className="right-border">
                        <div className="box-customer-content">
                          <div className="title">
                            <span>THÔNG TIN GIAO HÀNG</span>
                          </div>
                          <div>
                            [Anh/Chị]<b className="ng-binding"> Hồ Thị Vừa</b>
                          </div>
                          <div className="ng-binding">
                            ngocduyen@gmail.com | 65 Trần Cao vân | 0162964783
                          </div>
                        </div>
                        <div className="box-customer-content">
                          <div className="title">
                            <span>THÔNG TIN THANH TOÁN</span>
                          </div>
                          <div>
                            [Anh/Chị]<b className="ng-binding">Hồ Thị Vừa</b>
                          </div>
                          <div className="ng-binding">
                            ngocduyen@gmail.com | 65 Trần Cao vân | 0162964783
                          </div>
                        </div>
                      </td>
                      <td colSpan={4} className="left-border">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <b>Tổng tiền thanh toán</b>
                              </td>
                              <td className="text-right ">
                                <b className="total-payment ng-binding">
                                  589,000
                                </b>
                                <p className="note" />
                              </td>
                            </tr>
                            <tr className="text-center order-stt">
                              <td colSpan={2}>
                                <div>Trạng thái đơn hàng</div>
                                <div>
                                  <b className="ng-binding">Chưa</b>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="button text-right">
                <Link className="btn btn-default" to="/mycart">
                  Trở về danh sách đơn hàng
                </Link>
                <Link className="btn btn-primary" to="/product">
                  Tiếp tục mua hàng
                </Link>
              </div>
            </div>
          </div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default CheckOrderPage
