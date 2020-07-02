import React, { Component } from 'react'
import './ShoppingIcon.scss'

export class ShoppingIcon extends Component {
  render() {
    return (
      <div className="shopping-icon">
        <div className="item icon-cart active">
          <div className="block">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
          <div className="block"> Giỏ hàng của tôi</div>
          <div className="block circle">
            <span className="number">1</span>
          </div>
        </div>
        <div className="item icon-pay">
          <div className="block">
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <div className="block">Thanh toán</div>
          <div className="block circle">
            <span className="number">2</span>
          </div>
        </div>
        <div className="item icon-finish">
          <div className="block">
            <i className="fa fa-check" aria-hidden="true"></i>
          </div>
          <div className="block"> Hoàn tất</div>
          <div className="block circle">
            <span className="number">3</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingIcon
