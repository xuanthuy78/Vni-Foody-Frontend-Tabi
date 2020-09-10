import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Form, Button } from 'antd'

export class NewsViewPage extends Component {
  render() {
    return (
      <MasterLayoutAdmin>
        <div className="product-view">
          <h2>View News</h2>
          <Form layout="vertical">
            <Form.Item label="Tiêu đề">Tặng 1 bánh pizza miễn phí </Form.Item>
            <Form.Item label="Danh Mục">Dự án </Form.Item>
            <Form.Item label="Mô tả sản phẩm">Tặng 1 pizza cỡ M (áp dụng cho tất cả</Form.Item>
            <Form.Item label="Ảnh">
              <div className="block">
                <div className="box">
                  <div className="item">
                    <img className="" src={'http://localhost:3000/assets/images/left_1.png'} alt="" />
                  </div>
                  <div className="item">
                    <img className="" src={'http://localhost:3000/assets/images/sup_cua_large.jpg'} alt="" />
                  </div>
                  <div className="item">
                    <img className="" src={'http://localhost:3000/assets/images/sup_cua_large.jpg'} alt="" />
                  </div>
                  <div className="item">
                    <img className="" src={'http://localhost:3000/assets/images/sup_cua_large.jpg'} alt="" />
                  </div>
                </div>
              </div>
            </Form.Item>
            <Form.Item label="Chi tiết sản phẩm">Content</Form.Item>
            <Form.Item>
              <Button>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </MasterLayoutAdmin>
    )
  }
}

export default NewsViewPage
