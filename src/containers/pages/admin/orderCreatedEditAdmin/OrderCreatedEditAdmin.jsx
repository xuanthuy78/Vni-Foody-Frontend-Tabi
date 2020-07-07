import React, { Component } from 'react'
import './OrderCreatedEditAdmin.scss'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Select, Button } from 'antd'

const { Option } = Select
export class OrderCreatedEditAdmin extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`)
  }
  render() {
    return (
      <MasterLayoutAdmin>
        <div className="order-detail">
          <div className="infor">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h4>Thông tin đơn hàng</h4>
                <div className="content">
                  <label>Mã đơn hàng:</label>
                  <span>123</span>
                </div>
                <div className="content">
                  <label>Ngày đặt hàng:</label>
                  <span>07/07/2020</span>
                </div>
                <div className="content">
                  <label>Trạng thái:</label>
                  <span>Đang xử lý</span>
                </div>
                <div className="content">
                  <label>Tổng tiền đơn hàng:</label>
                  <span>150.000đ</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h4>Thông tin người mua hàng</h4>
                <div className="content">
                  <label>Tên người mua hàng:</label>
                  <span>John Brown</span>
                </div>
                <div className="content">
                  <label>Địa chỉ:</label>
                  <span>Trưng nữ vương</span>
                </div>
                <div className="content">
                  <label>Số điện thoại:</label>
                  <span>0774453346</span>
                </div>
                <div className="content">
                  <label>Ghi chú:</label>
                  <span>
                    Placeat qui quia ex minus esse. Velit quos voluptate vero
                    fuga perferendis facere aut aut. Nemo voluptate minima
                    consequatur asperiores autem adipisci aut.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <h4>Danh sách sản phẩm trong đơn hàng</h4>
            <div className="product-detail table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sofa Fly GCF126 - 2 - 1</td>
                    <td>
                      <div className="item">
                        <img
                          className=""
                          src={'http://localhost:3000/assets/images/left_1.png'}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>150.000</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="status">
            <label className="mr-2">Trạng thái đơn hàng:</label>
            <Select
              defaultValue="Đang xử lý"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Option value="1">Đang xử lý</Option>
              <Option value="2">Đã xử lý</Option>
              <Option value="3">Hủy</Option>
            </Select>
            <Button type="primary" className="ml-2">
              Thay đổi
            </Button>
          </div>
        </div>
      </MasterLayoutAdmin>
    )
  }
}

export default OrderCreatedEditAdmin
