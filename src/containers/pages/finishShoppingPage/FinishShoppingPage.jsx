import React, { Component } from 'react'
import './FinishShoppingPage.scss'
import { MasterLayout } from '../../../components/layout'
import Partner from '../../../components/product/partner/Partner'
import { Link } from 'react-router-dom'

export class FinishShoppingPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container">
          <div className="finish">
            <div className="finish-success">
              <div className="menu-title mb-3">
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
                    ></i>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="#">
                      <span>Hoàn tất</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="alert alert-success">
                <strong>Success!</strong> Đơn hàng của bạn đã được mua thành
                công.
              </div>
            </div>
            <div className="finish-content">
              <div className="detail mt-2">
                <h5>
                  Mã đơn hàng của bạn:
                  <strong>#100000081</strong>
                </h5>
                <h6>
                  Ngày đặt: <i style={{ fontWeight: 400 }}>08/05/2020</i>
                </h6>
                <h6>Phương thức thanh toán:</h6>
                <div className="table-product">
                  <p className="title">Thông tin đơn hàng</p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-color">
                        <tr>
                          <th>STT</th>
                          <th>Sản phẩm</th>
                          <th>Đơn giá</th>
                          <th>Số lượng</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Salad cá ngừ</td>
                          <td>49.000</td>
                          <td>1</td>
                          <td>49.000đ</td>
                        </tr>
                        <tr>
                          <td className="sum end" colSpan={4}>
                            <strong>TỔNG THANH TOÁN: </strong>
                          </td>
                          <td className="price">49.000đ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="scan button-same">
                <button type="button" className="btn btn-danger pay">
                  <i className="fa fa-print mr-1" aria-hidden="true"></i>In đơn
                  hàng
                </button>
              </div>
            </div>
            <div className="finish-btn button-same end">
              <Link to="/product" className="btn btn-dark mr-2 continue">
                TIẾP TỤC MUA HÀNG
              </Link>
              <Link to="/mycart" className="btn btn-danger pay">
                Đơn hàng của tôi
              </Link>
            </div>
          </div>

          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default FinishShoppingPage
