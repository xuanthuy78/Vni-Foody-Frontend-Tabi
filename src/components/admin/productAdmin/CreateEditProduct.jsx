import React, { Component } from 'react'
import { Modal, Form, Input, Button, Select, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const { Option } = Select
export class CreateEditProduct extends Component {
  render() {
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
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={null}
        width="80%"
      >
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your category!',
              },
            ]}
          >
            <Select placeholder="Please select a category">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Number"
            name="number"
            rules={[
              {
                required: true,
                message: 'Please input your number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Describe"
            name="describe"
            rules={[
              {
                required: true,
                message: 'Please input your describe!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Upload"
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
      </Modal>
    )
  }
}

export default CreateEditProduct
