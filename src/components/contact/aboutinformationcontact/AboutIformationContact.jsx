import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AboutInformationContact.scss'

export class AboutIformationContact extends Component {
  render() {
    return (
      <div className="contact-content">
        <div className="contact-title">
          <h1 className="title">
            <span>THÔNG TIN LIÊN HỆ</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="contact-image">
              <img
                src={'assets/images/logo.png'}
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="contact-info">
              <div className="docs">
                <b className="name ng-binding">
                  CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUNTIME
                </b>
              </div>
              <div className="docs ng-binding">
                <i className="icon fa fa-map-marker" />
                <b className="information-content">Địa chỉ:</b> 5/12A Quang
                Trung, P.14, Q.Gò Vấp, Tp.Hồ Chí Minh
              </div>
              <div className="docs ng-binding">
                <i className="icon fa fa-phone" />
                <b className="information-content">Điện thoại:</b> (08) 85 85 66
                38
              </div>
              <div className="docs ng-binding">
                <i className="icon fa fa-mobile" />
                <b className="information-content">Hotline</b> 0908770095
              </div>
              <div className="docs ng-binding">
                <i className="icon fa fa-fax" />
                <b className="information-content">Fax:</b>(08) 85 85 66 38
              </div>
              <div className="docs">
                <i className="icon fa fa-envelope" />
                <Link
                  to="mailto:info@runtime.vn"
                  className="information-content about-email ng-binding"
                >
                  info@runtime.vn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutIformationContact
