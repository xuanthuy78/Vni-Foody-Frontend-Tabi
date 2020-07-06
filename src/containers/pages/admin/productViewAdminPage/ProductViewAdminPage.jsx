import React, { Component } from 'react'
import './ProductViewAdminPage.scss'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Form, Button } from 'antd'

export class ProductViewAdminPage extends Component {
  render() {
    return (
      <MasterLayoutAdmin>
        <div className="product-view">
          <h2>View Product</h2>
          <Form layout="vertical">
            <Form.Item label="Danh Mục">Thực đơn chính/Gà/Gà rán</Form.Item>
            <Form.Item label="Tên sản phẩm">Gà rán</Form.Item>
            <Form.Item label="Thương hiệu">KFC</Form.Item>
            <Form.Item label="Mô tả sản phẩm">
              Description Description Description DDescription Description
            </Form.Item>
            <Form.Item label="Mã sản phẩm">20201905V01</Form.Item>
            <Form.Item label="Ảnh">
              <div className="block">
                <div className="box">
                  <div className="item">
                    <img
                      className=""
                      src={'http://localhost:3000/assets/images/left_1.png'}
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=""
                      src={
                        'http://localhost:3000/assets/images/sup_cua_large.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=""
                      src={
                        'http://localhost:3000/assets/images/sup_cua_large.jpg'
                      }
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      className=""
                      src={
                        'http://localhost:3000/assets/images/sup_cua_large.jpg'
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Form.Item>
            <Form.Item label="Giá sản phẩm">150.000đ</Form.Item>
            <Form.Item label="Chi tiết sản phẩm">Content</Form.Item>
            <Form.Item>
              <Button onClick={this.props.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </MasterLayoutAdmin>
    )
  }
}

export default ProductViewAdminPage
