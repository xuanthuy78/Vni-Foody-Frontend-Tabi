import React, { Component } from 'react'
import './SendInformationContact.scss'
import Iframe from 'react-iframe'

export class SendInformationContact extends Component {
  render() {
    return (
      <div className="about-informationsend-contact">
        <div className="about-contact-title">
          <h3 className="title">GỬI THÔNG TIN LIÊN HỆ</h3>
        </div>
        <div className="description">
          Xin vui lòng điền các yêu cầu vào mẫu dưới đây và gửi cho chúng tôi.
          Chúng tôi sẽ trả lời bạn ngay sau khi nhận được. Xin chân thành cảm
          ơn!
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="contact-feedback">
              <form className="ng-pristine ng-invalid">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="icon input-group-text" id="basic-addon1">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="icon input-group-text" id="basic-addon1">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                    aria-label=""
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="icon input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label=""
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="icon input-group-text" id="basic-addon1">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Điện thoại"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="icon input-group-text" id="basic-addon1">
                      <i className="fa fa-file-text" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tiêu đề"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <textarea
                    placeholder="Nội dung"
                    className="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"
                    rows="3"
                    ng-model="Content"
                    required=""
                  ></textarea>
                </div>
                <button className="btn btn-default" type="submit">
                  Gửi
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="google-map">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15335.110545683861!2d108.20217829999999!3d16.077024750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1588238226322!5m2!1sen!2s"
                frameBorder={0}
                className="google-child"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendInformationContact
