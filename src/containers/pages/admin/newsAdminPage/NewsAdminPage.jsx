import React, { Component } from 'react'
import { Table, Modal, Space } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'
import Moment from 'moment'
import qs from 'qs'

const { confirm } = Modal

export class NewsAdminPage extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: null,
      pagination: {
        current: 1,
        total: null,
      },
      loading: true,
    }
  }

  componentDidMount() {
    //nhận được dự liệu và gọi api
    const search = qs.parse(this.props.location.search.substr(1))
    this.callApiNews(search.page || 1, search.limit || 10)
  }

  componentDidUpdate(prevProps, prevState) {
    //check trường hợp phân trang thay đổi thì gọi api
    const oldSearch = prevProps.location && qs.parse(prevProps.location.search.substr(1))
    const newSearch = this.props.location && qs.parse(this.props.location.search.substr(1))
    if (oldSearch.page !== newSearch.page || oldSearch.limit !== newSearch.limit) {
      this.setState({
        loading: true,
      })
      this.callApiNews(newSearch.page || 1, newSearch.limit || 10)
    }
  }

  async callApiNews(page, limit) {
    await this.props.actions.newsList(page, limit)
    const data = [...this.props.news.data]
    data.map((item, index) => (item.key = index))
    //page đang là string
    this.setState({
      dataSource: data,
      loading: false,
      pagination: {
        current: parseInt(page),
        total: this.props.news.meta.pagination.total,
        pageSize: parseInt(limit),
      },
    })
    window.scrollTo(0, 0)
  }
  // modal delete
  showConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {},
    })
  }

  handleNews = (pagination) => {
    //truyền thông tin cần thiết gửi lên location
    const location = {
      pathname: '/admin/news',
      search: `page=${pagination.current}&limit=${pagination.pageSize}`,
    }
    this.props.history.push(location)
  }

  render() {
    const { dataSource } = this.state
    //Colums là tiêu đề render một lần thôi
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (_, r, index) => {
          const pagination = qs.parse(this.props.location.search.substr(1))
          const page = pagination.page || 1,
            limit = pagination.limit || 10
          return (page - 1) * limit + index + 1
        },
      },
      {
        title: 'Tiêu đề',
        dataIndex: 'title',
        key: 'title',
        render: (text) => (
          <div className="describe">
            <Link to="/admin/news/1">{text}</Link>
          </div>
        ),
      },
      {
        title: 'Danh mục',
        dataIndex: 'article_category_name',
        key: 'article_category_name',
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (text) => (
          <div className="item">
            <img className="" src={'http://localhost:3000/assets/images/left_1.png'} alt="" />
          </div>
        ),
      },
      {
        title: 'Ngày tạo',
        dataIndex: 'created_at',
        key: 'created_at',
        width: 150,
        render: (text) => <div className="">{Moment(text).format('DD/MM/YYYY')}</div>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-info" to={`/admin/news/edit/${text.id}`}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
            <button type="button" className="btn btn-danger" onClick={this.showConfirm}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </Space>
        ),
      },
    ]
    return (
      <div className="main-detail">
        <div className="filter mb-3">
          <div className="nav-filter">
            <div className="nav-item search">
              <div className="item result">
                <Link to="#" className="navbar-brand">
                  30 <span>Bài viết</span>
                </Link>
              </div>
              <form className="item form-inline">
                <label className="title" htmlFor="parts-type">
                  Tiêu đề:
                </label>
                <input type="text" className="form-control" name="name" placeholder="Tìm theo tiêu đề..." />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search mr-2" aria-hidden="true"></i>
                  <span className="title-search">Search</span>
                </button>
              </form>
            </div>
            <div className="nav-item add-master">
              <Link className="btn btn-warm" to="/admin/news/created">
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                <span className="title-add">Add</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="table">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleNews}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news.items,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsAdminPage)
