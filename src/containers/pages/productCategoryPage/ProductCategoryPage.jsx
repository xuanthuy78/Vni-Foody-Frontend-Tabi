import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import Partner from '../../../components/product/partner/Partner'
import { MainSortProduct, MainItem } from '../../../components/home'
import './ProductCategoryPage.scss'
import { Pagination } from 'antd'

export class ProductCategoryPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="product-category">
          <div className="container">
            <div className="product-category-top">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="product-title float-left">
                    <h3 className="title">Thực đơn đặt biệt</h3>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  {/*product-sort*/}
                  <MainSortProduct />
                </div>
              </div>
            </div>
            <div className="product-category-content">
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
            <Partner />
          </div>
        </div>
      </MasterLayout>
    )
  }
}

export default ProductCategoryPage
