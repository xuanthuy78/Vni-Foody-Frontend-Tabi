import React, { Component } from 'react'
import { MasterLayout, Sidebar } from '../../../components/layout'
import { MainItem, MainSortProduct } from '../../../components/home'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'
import './ProductPage.scss'
import Partner from '../../../components/product/partner/Partner'

export class ProductPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="product-page">
          <div className="container">
            <div className="row product-top">
              <div
                id="first"
                className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
              >
                <Sidebar></Sidebar>
              </div>
              <div
                id="second"
                className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"
              >
                <div className="main-product">
                  <div className="menu-title">
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
                          <span>Sản phẩm</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-top">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="product-title float-left">
                          <h3 className="title">Sản phẩm</h3>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
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
                </div>
              </div>
            </div>
            {/*product-bottom*/}
            <Partner />
          </div>
        </div>
      </MasterLayout>
    )
  }
}

export default ProductPage
