import React, { Component } from 'react'
import { Form, Input, Button, Select, Upload, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import CKEditor from 'ckeditor4-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'

const { Option } = Select

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
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      fileList: [],
      news: {
        title: 'name',
        article_category_id: '2',
        description: 'name',
        content: '<p>Hello from CKEditor 4!</p>',
      },
    }
  }

  componentDidMount() {
    this.props.actions.newsCategoryList()
    this.setState({ loading: false })
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  onFinish = async (values) => {
    const originFileObj = values.image[0].originFileObj
    const imageUrl = await this.getBase64(originFileObj)
    const news = {
      title: values.title,
      article_category_id: values.article_category_id,
      description: values.description,
      image: imageUrl,
      content: values.content.editor.getData(),
    }
    this.props.actions.newsCreate(news)
  }

  handleCascader = (value) => {
    console.log(value)
  }

  onEditorChange = (evt) => {
    // this.setState({
    //   data: evt.editor.getData(),
    // })
  }
  render() {
    const { news_categories } = this.props
    const { loading, fileList } = this.state
    const props = {
      onRemove: (file) => {
        console.log(file)
        this.setState((state) => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList,
          }
        })
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }))
        return false
      },
      fileList,
    }

    return (
      <div>
        <h3>Bài Viết</h3>
        <Spin spinning={loading}></Spin>
        <Form
          layout="vertical"
          name="basic"
          initialValues={this.state.news}
          onFinish={this.onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tiêu đề"
            name="title"
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
            name="article_category_id"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please input your category for news!',
              },
            ]}
          >
            <Select placeholder="Please input your category for news!">
              {news_categories.map((item, index) => {
                return (
                  <Option key={index} value={item.id}>
                    {item.name}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Mô tả sản phẩm"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Ảnh"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: 'Please input your upload!',
              },
            ]}
          >
            <Upload listType="picture" {...props}>
              {fileList.length >= 1 ? null : (
                <Button>
                  <UploadOutlined /> Click to upload
                </Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Nội dung" name="content">
            <CKEditor data={this.state.news.content} onChange={this.onEditorChange} />
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
const mapStateToProps = (state) => ({
  news_categories: state.news.news_categories,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsCreateEditAdminPage)
