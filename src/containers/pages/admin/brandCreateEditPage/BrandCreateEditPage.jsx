import React, { Component } from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const onFinish = (values) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const normFile = (e) => {
  console.log('Upload event:', e)

  if (Array.isArray(e)) {
    return e
  }

  return e && e.fileList
}
export class BrandCreateEditPage extends Component {
  render() {
    return (
      <div>
        <h3>Thương hiệu</h3>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tên thương hiệu"
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
            label="Thứ tự ưu tiên"
            name="category"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your order!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ảnh"
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: 'Please input your upload!',
              },
            ]}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
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

export default BrandCreateEditPage
