import React, { Component } from 'react'
import './HotProduct.scss'
import AboutProducts from '../aboutProducts/AboutProducts'

export class HotProduct extends Component {
  render() {
    return (
      <div className="box-product">
        <h3 className="title">
          <span>Sản phẩm Hot</span>
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        <div className="box-product-block">
          <AboutProducts></AboutProducts>
          <AboutProducts></AboutProducts>
          <AboutProducts></AboutProducts>
        </div>
      </div>
    )
  }
}

export default HotProduct
