import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarUser from '../../../components/layout/sidebarUser/SidebarUser'
import './MyCartDetailPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'
export class MyCartDetailPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="container">
          <div className="mycartdetail">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <SidebarUser />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="mycart-menu menu-title">
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
                        <span>Đơn hàng của tôi</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="about-mycartdetail">
                  <h1 className="title">
                    <span>ĐƠN HÀNG CỦA TÔI</span>
                  </h1>
                  <div className="information-user">
                    Đơn hàng của
                    <Link to="#" className="ng-binding customer-name">
                      Hồ Thị Vừa
                    </Link>
                    <b className="ng-binding"> (#100000088)</b> lúc
                    <span className="grey ng-binding">
                      2020-06-17T13:46:22.477
                    </span>
                  </div>
                  <div className="table-mycartdetail table-responsive ">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th colSpan={2}>Tên sản phẩm</th>
                          <th>Mã sản phẩm</th>
                          <th>Giá</th>
                          <th>Số lượng</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="image">
                            <Link to="/productdetail">
                              <img
                                src={'assets/images/supreme_pizza_large.jpg'}
                                className="img-responsive"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <Link className="nameproduct" to="/productdetail">
                              Tomato sp
                            </Link>
                          </td>
                          <td>tomato-sp</td>
                          <td>68.000đ</td>
                          <td>2</td>
                          <td>136.000đ</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className="image">
                            <Link to="/productdetail">
                              <img
                                src={'assets/images/supreme_pizza_large.jpg'}
                                className="img-responsive"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <Link className="nameproduct" to="/productdetail">
                              Tomato sp
                            </Link>
                          </td>
                          <td>tomato-sp</td>
                          <td>68.000đ</td>
                          <td>2</td>
                          <td>136.000đ</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className="image">
                            <Link to="/productdetail">
                              <img
                                src={'assets/images/supreme_pizza_large.jpg'}
                                className="img-responsive"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <Link className="nameproduct" to="/productdetail">
                              Tomato sp
                            </Link>
                          </td>
                          <td>tomato-sp</td>
                          <td>68.000đ</td>
                          <td>2</td>
                          <td>136.000đ</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td className="image">
                            <Link to="/productdetail">
                              <img
                                src={'assets/images/supreme_pizza_large.jpg'}
                                className="img-responsive"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <Link className="nameproduct" to="/productdetail">
                              Tomato sp
                            </Link>
                          </td>
                          <td>tomato-sp</td>
                          <td>68.000đ</td>
                          <td>2</td>
                          <td>136.000đ</td>
                        </tr>
                        <tr className="information-total-order">
                          <td className="right-border" colSpan={3}>
                            <div className="box-customer-content">
                              <div className="title docs">
                                <span>Thông tin giao hàng</span>
                              </div>
                              <div>
                                [Anh/Chị]<b> Hồ Thị Vừa</b>
                              </div>
                              <div>
                                ngocduyen@gmail.com | 65 Trần Cao vân |
                                0162964783
                              </div>
                            </div>
                            <div className="box-customer-content">
                              <div className="title">
                                <span>Thông tin thanh toán</span>
                              </div>
                              <div>
                                [Anh/Chị]<b>Hồ Thị Vừa</b>
                              </div>
                              <div>
                                ngocduyen@gmail.com | 65 Trần Cao vân |
                                0162964783
                              </div>
                            </div>
                          </td>
                          <td colSpan={4}>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="text-left">
                                    <b>Tổng tiền thanh toán</b>
                                  </td>
                                  <td className="text-right ">
                                    <b className="total-payment">136.000đ</b>
                                    <div className="help-block">
                                      Bao gồm VAT
                                    </div>
                                  </td>
                                </tr>
                                <tr className="text-center order-stt">
                                  <td colSpan={2}>
                                    <div className="docs">
                                      Trạng thái đơn hàng
                                    </div>
                                    <div className="docs">
                                      <b>Chưa</b>
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
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default MyCartDetailPage
