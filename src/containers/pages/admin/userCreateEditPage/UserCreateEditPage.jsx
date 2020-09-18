import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd'

const { Option } = Select
const onFinish = (values) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
export class UserCreateEditPage extends Component {
  render() {
    return (
      <div>
        <h3>User</h3>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tên"
            name="name"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your gender!',
              },
            ]}
          >
            <Select placeholder="Please select a category">
              <Option value="1">Nam</Option>
              <Option value="2">Nữ</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your role!',
              },
            ]}
          >
            <Select placeholder="Please select a category">
              <Option value="0">User</Option>
              <Option value="1">Admin</Option>
            </Select>
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

export default UserCreateEditPage
