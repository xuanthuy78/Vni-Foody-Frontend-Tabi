import React, { Component } from 'react'
import './ProductDetailSidebar.scss'
import { Link } from 'react-router-dom'

export class ProductDetailSidebar extends Component {
  render() {
    return (
      <div className="productdetail-sidebar">
        <h3 className="title">
          <span>CHÍNH SÁCH BÁN HÀNG</span>
        </h3>
        <div className="sale-policy-block">
          <ul className="contet-title">
            <li className="">Giao hàng TOÀN QUỐC</li>
            <li>Thanh toán khi nhận hàng</li>
            <li>
              Đổi trả trong <span>15 ngày</span>
            </li>
            <li>Hoàn ngay tiền mặt</li>
            <li>Chất lượng đảm bảo</li>
            <li>
              Miễn phí vận chuyển:<span>Đơn hàng từ 3 món trở lên</span>
            </li>
          </ul>
        </div>
        <div className="buy-guide">
          <h3 className="title">Hướng Dẫn Mua Hàng</h3>
          <ul>
            <li>
              Mua hàng trực tiếp tại website
              <b className="ng-binding"> http://www.runtime.vn</b>
            </li>
            <li>
              Gọi điện thoại <strong className="ng-binding">0908770095</strong>{' '}
              để mua hàng
            </li>
            <li>
              Mua tại Trung tâm CSKH:
              <br />
              <strong className="ng-binding">
                5/12A Quang Trung, P.14, Q.Gò Vấp, Tp.Hồ Chí Minh
              </strong>
              <Link
                to="/ban-do.html"
                rel="nofollow"
                target="_blank"
                className="map"
              >
                Xem Bản Đồ
              </Link>
            </li>
            <li>
              Mua sỉ/buôn xin gọi
              <strong className="ng-binding">0908770095</strong> để được hỗ trợ.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ProductDetailSidebar
