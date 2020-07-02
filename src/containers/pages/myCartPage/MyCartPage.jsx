import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import SidebarUser from '../../../components/layout/sidebarUser/SidebarUser'
import './MyCartPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'
export class MyCartPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="container">
          <div className="mycart">
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
                <div className="about-mycart">
                  <h1 className="title">
                    <span>ĐƠN HÀNG CỦA TÔI</span>
                  </h1>
                  <div className="my-order table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Mã đơn hàng</th>
                          <th>Tên khách hàng</th>
                          <th>Tổng tiền</th>
                          <th>Vận chuyển</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000090
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>136.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000089
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>127.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000088
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>589.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000087
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>98.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000087
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>98.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000087
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>98.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000087
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>98.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <Link className="code-order" to="/mycartdetail">
                              #100000087
                            </Link>
                          </td>
                          <td>
                            <Link className="user-name" to="/mycartdetail">
                              Hồ Thị Vừa
                            </Link>
                          </td>
                          <td>98.000đ</td>
                          <td>Chưa</td>
                          <td>
                            <Link className="order" to="/mycartdetail">
                              <i className="fa fa-angle-double-right " />
                              Xem đơn hàng
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default MyCartPage
