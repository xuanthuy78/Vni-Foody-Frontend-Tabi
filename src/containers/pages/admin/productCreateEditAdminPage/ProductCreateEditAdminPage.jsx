import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Form, Input, Button, Select, Upload, Cascader } from 'antd'
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
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]
export class ProductCreateEditAdminPage extends Component {
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
      <MasterLayoutAdmin>
        <h3>Product</h3>
        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
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
            <Cascader
              options={options}
              onChange={this.handleCascader}
              placeholder="Please select"
            />
          </Form.Item>
          <Form.Item
            label="Tên sản phẩm"
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
            label="Thương hiệu"
            name="brand"
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
            label="Mã sản phẩm"
            name="code"
            rules={[
              {
                required: true,
                message: 'Please input your describe!',
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
          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input your describe!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Chi tiết sản phẩm" name="content">
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
      </MasterLayoutAdmin>
    )
  }
}

export default ProductCreateEditAdminPage
