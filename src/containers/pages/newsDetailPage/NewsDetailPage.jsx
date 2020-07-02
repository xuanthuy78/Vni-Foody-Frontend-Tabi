import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import { Link } from 'react-router-dom'
import { NewsSidebarMenu } from '../../../components/news'
import TopNews from '../../../components/home/topNews/TopNews'
import { Partner } from '../../../components/product/partner/Partner'
import './NewsDetailPage.scss'

export class NewsDetailPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="news-detail">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="news-detail-content">
                  <div className="content-title menu-title">
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
                          <span>
                            Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của
                            bạn
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="content-detail">
                    <h6 className="title">
                      Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn
                    </h6>
                    <div className="date">
                      <span>07/01/2015</span>
                    </div>
                    <div className="writer">
                      <p>
                        Tặng 1 pizza cỡ M (áp dụng cho tất cả các loại pizza trừ
                        số 3, 11 và 12) <br />
                        Quý khách vui lòng mang theo chứng minh thư nhân dân
                        hoặc các giấy tờ tương đương thể hiện ngày sinh nhật
                        trùng với ngày nhận bánh <br />
                        Mỗi khách hàng chỉ được nhận 1 bánh tặng miễn phí
                        <br />
                        Chỉ áp dụng với các đơn hàng có giá trị trên 250.000đ{' '}
                        <br />
                        Cửa hàng tặng miễn phí tối đa 10 bánh/ 1 ngày cho 10
                        người đăng kí đầu tiên <br />
                      </p>
                    </div>
                    <div className="icon">
                      <div className="icon-items">
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                          <span className="like">Like</span>
                          <span>1</span>
                        </button>
                        <button type="button" className="btn btn-primary">
                          Share
                        </button>
                      </div>
                      <div className="icon-share">
                        <button type="button" className="btn btn-primary">
                          <i
                            className="fa fa-plus-square mr-1"
                            aria-hidden="true"
                          ></i>
                          Chia sẻ
                        </button>
                        <div className="icon-share-many">
                          <nav className="navbar">
                            {/* Links */}
                            <ul className="navbar-nav">
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                  Twitter
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-print"
                                    aria-hidden="true"
                                  ></i>
                                  In
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-facebook-official"
                                    aria-hidden="true"
                                  ></i>
                                  Facebook
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-envelope"
                                    aria-hidden="true"
                                  ></i>
                                  Email
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-pinterest-square"
                                    aria-hidden="true"
                                  ></i>
                                  Pinterest
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-google-plus-square"
                                    aria-hidden="true"
                                  ></i>
                                  Google +
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="#">
                                  <i
                                    className="fa mr-1 fa-plus-square"
                                    aria-hidden="true"
                                  ></i>
                                  Thêm... (199)
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="add">
                            <Link className="add-link" to="#">
                              <i
                                className="fa mr-1 fa-plus-square"
                                aria-hidden="true"
                              ></i>
                              AddThis
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-other">
                    <h6>Tin tức liên quan</h6>
                    <nav className="navbar">
                      {/* Links */}
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/news-detail">
                            <i
                              className="fa fa-caret-right mr-2 "
                              aria-hidden="true"
                            ></i>
                            Khuyến mãi thứ 2, thứ 4, thứ 6 hàng tuần Khuyến mãi
                            thứ 2, thứ 4, thứ 6 hàng tuần (16:25 07/01/2015)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i
                              className="fa fa-caret-right mr-2"
                              aria-hidden="true"
                            ></i>
                            Khuyến mãi thứ 3, thứ 5 hàng tuần (16:25 07/01/2015)
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#">
                            <i
                              className="fa fa-caret-right mr-2"
                              aria-hidden="true"
                            ></i>
                            Khuyến mãi thứ 3, thứ 5 hàng tuần (16:25 07/01/2015)
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <NewsSidebarMenu />
                <TopNews />
              </div>
            </div>
            <div className="news-detail-bottom">
              <Partner></Partner>
            </div>
          </div>
        </div>
      </MasterLayout>
    )
  }
}

export default NewsDetailPage
