import React, { Component } from 'react'
import './AboutProducts.scss'
import { Link } from 'react-router-dom'

export class AboutProducts extends Component {
  render() {
    return (
      <div className="about-product">
        <div className="item">
          <div className="image">
            <Link to="#" title="Xà lách trộn kiểu Nga">
              <img
                className="product-img-top"
                src={'assets/images/sup_cua_large.jpg'}
                alt=""
              />
            </Link>
          </div>
          <div className="name">
            <Link
              className="title-name"
              to="/san-pham/xa-lach-tron-kieu-nga.html"
              title="Xà lách trộn kiểu Nga"
            >
              Xà lách trộn kiểu Nga
            </Link>
          </div>
          <div className="rating">
            <div className="rating-1">
              <span className="rating-img"></span>
            </div>
          </div>
          <div className="price">
            <span className="price-new">59.000&nbsp;₫</span>
          </div>
          <div className="button text-center">
            <Link
              className="btn btn-default btn-add-cart"
              to="/san-pham/xa-lach-tron-kieu-nga.html"
            >
              Mua
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutProducts
