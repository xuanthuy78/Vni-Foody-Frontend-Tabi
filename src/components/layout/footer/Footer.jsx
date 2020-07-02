import React, { Component } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
export class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <section className="footer-top">
          <div className="footer-image">
            <img src={'assets/images/logo.png'} alt="" className="" />
          </div>
        </section>
        <section className="footer-conter">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <h4 className="title">GIỚI THIỆU</h4>
                <div className="content">
                  <ul className="content-list">
                    <li>
                      <Link to="" className="">
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="">
                        Lĩnh vực hoạt động
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Liên hệ với chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Tin tức - Sự kiện
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Quy định bảo hành - đổi trả
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <h4 className="title">CHĂM SÓC KHÁCH HÀNG</h4>
                <div className="content">
                  <ul className="content-list">
                    <li>
                      <Link to="#" className="">
                        Qui định đổi trả
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Chính sách bán hàng
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Chính sách bảo mật
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 link">
                <h4 className="title">FACEBOOK</h4>
                <div className="content">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-youtube" aria-hidden="true" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-end">
          <div>
            © 2017, <Link to="https://www.runtime.vn">RUNTIME Store</Link>
          </div>
        </section>
      </footer>
    )
  }
}

export default Footer
