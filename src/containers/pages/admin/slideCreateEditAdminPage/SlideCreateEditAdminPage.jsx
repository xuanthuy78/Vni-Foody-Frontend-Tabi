import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
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
export class SlideCreateEditAdminPage extends Component {
  render() {
    return (
      <MasterLayoutAdmin>
        <h3>Slide</h3>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tiêu đề"
            name="category"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your title!',
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
      </MasterLayoutAdmin>
    )
  }
}

export default SlideCreateEditAdminPage
