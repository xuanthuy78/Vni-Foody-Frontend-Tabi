import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './ContactPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'

import {
  SendInformationContact,
  AboutIformationContact,
} from '../../../components/contact/index'

export class ContactPage extends Component {
  render() {
    return (
      <MasterLayout>
        <section className="contact-content">
          <div className="container">
            <div className="contact-menu menu-title">
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
                  <Link className="nav-link" to="/ContactPage">
                    <span>Liên hệ</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <AboutIformationContact></AboutIformationContact>
                <SendInformationContact></SendInformationContact>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="about-support">
                  <div className="support-title">
                    <h3 className="title">
                      SẢN PHẨM HOT
                      <i
                        className="fa fa-bars float-right"
                        aria-hidden="true"
                      />
                    </h3>
                  </div>
                  <div className="information-support">
                    <div className="support-hotline">
                      <b>HOTLINE</b>
                      <br />
                      <b className="ng-binding">0908770095</b>
                    </div>
                    <div
                      className="support-item ng-scope"
                      ng-repeat="item in SupportOnlines"
                    >
                      <div className="name">
                        Mr.Trường <b className="ng-binding">0908770095</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Partner />
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ContactPage
