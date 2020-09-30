import React, { Component } from 'react'
import { Form, Input, Button, Select, Upload, Spin, message } from 'antd'
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
      fileList: [],
      loading: true,
      news: {},
    }
  }

  async componentDidMount() {
    this.props.actions.newsCategoryList().then((res) => {
      this.setState({ loading: false })
    })
    if (this.props.match.params.id) {
      await this.props.actions.newsView(this.props.match.params.id)
      const { news } = this.props
      this.setState({
        ...this.state,
        fileList: [
          {
            uid: news.id,
            name: news.title,
            status: 'done',
            url: news.image,
          },
        ],
        news: {
          id: news.id,
          title: news.title,
          article_category_id: news.article_category_id,
          description: news.description,
          content: news.content,
        },
      })
      this.setState({
        loading: false,
      })
    }
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
    const imageValue = this.state.fileList[0]
    const imageUrl = await this.getBase64(imageValue)
    const news = {
      title: values.title,
      article_category_id: values.article_category_id,
      description: values.description,
      image: imageValue.url ? imageValue.url : imageUrl,
      content: values.content.editor ? values.content.editor.getData().trim() : values.content,
    }

    if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
      this.props.actions.newsEdit(this.props.match.params.id, news).then((response) => {
        message.success('This is a edit news')
        this.goBack()
      })
    } else {
      const news = {
        title: values.title,
        article_category_id: values.article_category_id,
        description: values.description,
        image: imageUrl,
        content: values.content.editor ? values.content.editor.getData().trim() : values.content,
      }
      await this.props.actions.newsCreate(news).then((response) => {
        message.success('This is a success create news')
        this.goBack()
      })
    }
  }
  goBack = () => {
    this.props.history.go(-1)
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
    const { fileList, loading, news } = this.state
    const props = {
      onRemove: (file) => {
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
        <Spin spinning={loading}>
          <h3>Bài Viết</h3>
          <Form
            layout="vertical"
            name="basic"
            key={news.id || '-1'}
            initialValues={news}
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
              {/* <img alt="example" style={{ width: '100%' }} src={fileList.url} /> */}
            </Form.Item>
            <Form.Item label="Nội dung" name="content">
              <CKEditor data={news.content} onChange={this.onEditorChange} />
            </Form.Item>
            <Form.Item>
              <Button onClick={this.props.handleCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit" className="ml-3">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  news_categories: state.news.news_categories,
  news: state.news.item,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsCreateEditAdminPage)
