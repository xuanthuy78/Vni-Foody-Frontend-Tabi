import React, { Component } from 'react'
import './MainProduct.scss'
import { Pagination } from 'antd'
import OwlCarousel from 'react-owl-carousel'
import { MainNewsFoody, MainItem, MainSortProduct } from '../index'
export class MainProduct extends Component {
  constructor() {
    super()
    this.state = {
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    }
  }
  render() {
    return (
      <div className="main-product">
        <div className="product-top">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="product-title float-left">
                <h3 className="title">Sản phẩm</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              {/*product-sort*/}
              <MainSortProduct />
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="row">
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
            <MainItem />
          </div>
          <div className="pagination justify-content-center">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <div className="product-bottom">
          <h3 className="title">TIN ẨM THỰC</h3>
          <div className="news-food">
            <OwlCarousel
              items={4}
              className="owl-theme"
              loop
              nav
              margin={8}
              autoplay
              navText={[
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>",
              ]}
              responsive={this.state.responsive}
            >
              <MainNewsFoody />
              <MainNewsFoody />
              <MainNewsFoody />
              <MainNewsFoody />
              <MainNewsFoody />
              <MainNewsFoody />
              <MainNewsFoody />
            </OwlCarousel>
          </div>
        </div>
      </div>
    )
  }
}

export default MainProduct
