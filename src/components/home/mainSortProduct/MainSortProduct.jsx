import React, { Component } from 'react'
import './MainSortProduct.scss'

export class MainSortProduct extends Component {
  render() {
    return (
      <div className="product-sort float-right">
        <h3 className="title">Sắp xếp</h3>
        <select id="cars">
          <option value="volvo">Mặc định</option>
          <option value="saab">Giá tăng dần</option>
          <option value="mercedes">Giá giảm dần</option>
          <option value="audi">Tên sản phẩm: A to Z</option>
          <option value="audi">Tên sản phẩm: Z to A</option>
        </select>
      </div>
    )
  }
}

export default MainSortProduct
