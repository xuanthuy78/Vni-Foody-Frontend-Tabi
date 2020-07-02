import React, { Component } from 'react'
import './NewsCategoryPages.scss'
import { MasterLayout } from '../../../components/layout'
import { NewsSidebarMenu, NewsItem } from '../../../components/news'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'

export class NewsCategoryPages extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="news-category">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                {/*Menu of news*/}
                <NewsSidebarMenu />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="news-category-content">
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
                      <li className="nav-item">
                        <Link className="nav-link" to="/news">
                          <span>Tin Tức</span>
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
                          <span>Tin khuyến mãi</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="news-detail">
                    <div className="news-title title-component">
                      <p>
                        <span>Tin Khuyến Mãi</span>
                      </p>
                    </div>
                    <div className="news-block">
                      <NewsItem />
                      <NewsItem />
                      <NewsItem />
                      <NewsItem />
                      <NewsItem />
                    </div>
                    <div className="pagination justify-content-center">
                      <Pagination defaultCurrent={1} total={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    )
  }
}

export default NewsCategoryPages
