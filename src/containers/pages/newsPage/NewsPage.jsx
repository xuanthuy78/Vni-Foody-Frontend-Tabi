import React, { Component } from 'react'
import './NewsPage.scss'
import { Partner } from '../../../components/product/partner/Partner'
import TopNews from '../../../components/home/topNews/TopNews'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd'
import { NewsSidebarMenu, NewsItem } from '../../../components/news'

export class NewsPage extends Component {
  render() {
    return (
      <div className="news-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="news-content">
                <div className="news-menu menu-title">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">
                        Trang chủ
                      </Link>
                    </li>
                    <li className="nav-item icon-link">
                      <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="#">
                        <span>Tin Tức</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="news-detail">
                  <div className="news-title title-component">
                    <p>
                      <span>Tin Tức</span>
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
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="news-sidebar">
                {/*News-sidebar-top-Menu*/}
                <NewsSidebarMenu />
                {/*News-sidebar-bottom*/}
                <TopNews />
              </div>
            </div>
          </div>
          <Partner />
        </div>
      </div>
    )
  }
}

export default NewsPage
