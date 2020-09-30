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
      news: {
        title: '',
        category: '',
        description: '',
        content: '',
        image: '',
      },
    }
  }

  async componentDidMount() {
    this.props.actions.newsCategoryList().then((res) => this.setState({ loading: false }))
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      await this.props.actions.newsView(this.props.match.params.id)
      const { item } = this.props
      this.setState({
        ...this.state,
        news: {
          id: item.id,
          title: item.title,
          category: item.article_category_id,
          description: item.description,
          content: item.content,
          image: [
            {
              uid: item.id,
              name: item.title,
              status: 'done',
              url: item.image,
            },
          ],
        },
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
    console.log(values)
    const imageValue = this.state.news.image[0]
    const imageUrl = await this.getBase64(imageValue)
    const news = {
      title: values.title,
      article_category_id: values.category,
      description: values.description,
      image: imageUrl,
      content: values.content.editor ? values.content.editor.getData().trim() : values.content,
    }
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id
      await this.props.actions.newsEdit(id, news).then((response) => {
        message.success('Sửa sản phẩm thành công')
        this.goBack()
      })
    } else {
      await this.props.actions.newsCreate(news).then((response) => {
        message.success('Thêm sản phẩm thành công')
        this.goBack()
      })
    }
  }

  goBack = () => {
    this.props.history.go(-1)
  }

  onEditorChange = (evt) => {
    // this.setState({
    //   data: evt.editor.getData(),
    // })
  }
  render() {
    const { news_categories } = this.props
    const { loading, news } = this.state
    const { image } = this.state.news
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.news.image.indexOf(file)
          const newFileList = state.news.image.slice()
          newFileList.splice(index, 1)
          return {
            ...state,
            news: {
              image: newFileList,
            },
          }
        })
      },

      beforeUpload: (file) => {
        this.setState((state) => ({
          ...state,
          news: {
            image: [...state.fileList, file],
          },
        }))
        return false
      },
      fileList: image,
    }
    console.log(news.image)
    return (
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
                message: 'Vui lòng nhập tiêu đề',
              },
            ]}
          >
            <Input placeholder="Nhập tiêu đề" />
          </Form.Item>
          <Form.Item
            label="Danh mục"
            name="category"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn danh mục cho tin tức',
              },
            ]}
          >
            <Select placeholder="Nhập danh mục cho tin tức">
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
            label="Mô tả tin tức"
            name="description"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mô tả tin tức!',
              },
            ]}
          >
            <Input.TextArea placeholder="Nhập mô tả tin tức" />
          </Form.Item>
          <Form.Item
            label="Ảnh"
            name="image"
            valuePropName="image"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn ảnh',
              },
            ]}
          >
            <Upload listType="picture" {...props}>
              {image.length >= 1 ? null : (
                <Button>
                  <UploadOutlined /> Click to upload
                </Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            label="Nội dung"
            name="content"
            rules={[
              {
                required: true,
                message: 'Please input your content!',
              },
            ]}
          >
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
    )
  }
}
const mapStateToProps = (state) => ({
  news_categories: state.news.news_categories,
  item: state.news.item,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsCreateEditAdminPage)
