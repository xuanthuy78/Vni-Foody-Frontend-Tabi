import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
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
      <MasterLayoutAdmin>
        <h3>Category</h3>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Danh mục cha:" name="parent">
            Thực đơn chính
          </Form.Item>
          <Form.Item
            label="Tên sản phẩm:"
            name="name"
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
      </MasterLayoutAdmin>
    )
  }
}

export default CategoryCreatedEditAdminPage
