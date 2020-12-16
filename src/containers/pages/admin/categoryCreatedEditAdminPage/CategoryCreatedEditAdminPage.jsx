import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

export class CategoryCreatedEditAdminPage extends Component {
  render() {
    const onFinish = (values) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
    return (
      <div>
        <h3>Category</h3>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label="Danh mục cha:">Thực đơn chính</Form.Item>
          <Form.Item
            label="Tên sản phẩm:"
            name="caterogy"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button onClick={this.props.handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit" className="ml-3">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default CategoryCreatedEditAdminPage
