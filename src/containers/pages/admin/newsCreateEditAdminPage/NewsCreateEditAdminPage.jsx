import React, { Component } from 'react'
import { Form, Input, Button, Select, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import CKEditor from 'ckeditor4-react'

const { Option } = Select
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
export class NewsCreateEditAdminPage extends Component {
  handleCascader = (value) => {
    console.log(value)
  }

  onEditorChange = (evt) => {
    // this.setState({
    //   data: evt.editor.getData(),
    // })
  }
  render() {
    return (
      <div>
        <h3>Bài Viết</h3>
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
            label="Danh mục"
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
            label="Mô tả sản phẩm"
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
          <Form.Item label="Nội dung" name="content">
            <CKEditor
              data="<p>Hello from CKEditor 4!</p>"
              onChange={this.onEditorChange}
            />
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

export default NewsCreateEditAdminPage
