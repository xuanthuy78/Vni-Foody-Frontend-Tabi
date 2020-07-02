import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainNewsFoody.scss'

export class MainNewsFoody extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={'assets/images/04_large.jpg'}
          alt=""
        />
        <div className="card-body">
          <div className="card-name">
            <Link to="#" className="link-name">
              Khuyến mãi thứ 3, thứ 5 hàng tuần Khuyến mãi thứ 3, thứ 5 hàng
              tuần Khuyến mãi thứ 3, thứ 5 hàng tuần Khuyến mãi thứ 3, thứ 5
              hàng tuần Khuyến mãi thứ 3, thứ 5 hàng tuần
            </Link>
          </div>
          <div className="card-content">
            <p>
              Mua 2 pizza cỡ lớn chỉ với 180.000đÁp dụng cho ngày thứ 3 và thứ
              Mua 2 pizza cỡ lớn chỉ với 180.000đÁp dụng cho ngày thứ 3 và thứ
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainNewsFoody
