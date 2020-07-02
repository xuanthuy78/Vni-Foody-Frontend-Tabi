import React, { Component } from 'react'
import { Modal, Form, Button } from 'antd'

export class ViewProduct extends Component {
  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          footer={null}
          width="80%"
          className="product-view"
        >
          <Form layout="vertical">
            <Form.Item label="Username">John Brown</Form.Item>
            <Form.Item label="Category">Cơm</Form.Item>
            <Form.Item label="Number">10</Form.Item>
            <Form.Item label="Describe">
              Description Description Description DDescription Description
            </Form.Item>
            <Form.Item label="Upload">
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
            <Form.Item>
              <Button onClick={this.props.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default ViewProduct
