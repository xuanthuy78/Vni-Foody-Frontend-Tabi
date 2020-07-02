import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import './ModalView.scss'

export class ModalView extends Component {
  render() {
    return (
      <div className="modal-dialog  modal-lg">
        <Modal
          title=" Bạn có 2 sản phẩm trong giỏ hàng."
          visible={this.props.displayModalView}
          onOk={this.handleOk}
          onCancel={this.props.funtionCantion}
          footer={null}
          width="60%"
        >
          <div className="table-responsive">
            <table className="table " width="100%">
              <thead>
                <tr>
                  <th />
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr
                  className="line-item ng-scope"
                  ng-repeat="item in OrderDetails"
                >
                  <td className="item-image">
                    <img
                      className="img-top"
                      src={'assets/images/sup_cua_large.jpg'}
                      alt=""
                      width="60px"
                      height="60px"
                    />
                  </td>
                  <td className="item-title">
                    <Link to="/productdetail" className="ng-binding">
                      Súp gà kem sữa
                      <br />
                    </Link>
                  </td>
                  <td className="item-quantity">
                    <input type="number" className="text " />
                  </td>
                  <td className="item-price ng-binding">312,000₫</td>
                  <td className="item-delete">
                    <Link to="/#" className="delete">
                      Xóa
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="total-price-modal">
                Tổng cộng :<span className="item-total">157,000₫</span>
              </div>
            </div>
          </div>
          <div className="row margin-top-10">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="comeback text-left">
                <Link to="/product" className="continue">
                  <i className="fa fa-chevron-circle-left " /> Tiếp tục mua hàng
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right">
              <div className="buttons btn-modal-cart">
                <Link className="btn btn-default" to="/pay-shopping">
                  Đặt hàng
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default ModalView
