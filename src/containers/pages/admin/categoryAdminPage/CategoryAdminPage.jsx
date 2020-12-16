import React, { Component } from 'react'
import { Table, Space, Modal, message } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'
import qs from 'qs'

const { confirm } = Modal

export class CategoryAdminPage extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: null,
      columns: null,
      title: null,
    }
  }

  componentDidMount() {
    let search = qs.parse(this.props.location.search.substr(1))
    this.callApiCategory(search.page, search.limit)
  }

  componentDidUpdate(prevProps, prevState) {
    //check trường hợp phân trang thay đổi thì gọi api
    const oldSearch = prevProps.location && qs.parse(prevProps.location.search.substr(1))
    const newSearch = this.props.location && qs.parse(this.props.location.search.substr(1))
    if (oldSearch.page !== newSearch.page || oldSearch.limit !== newSearch.limit) {
      this.setState({
        loading: true,
      })
      this.callApiCategory(newSearch.page, newSearch.limit)
    }
  }

  callApiCategory = async (page, limit) => {
    await this.props.actions.categoryList(page, limit).then((res) => {
      if (res.payload && res.payload.data && res.payload.data.data) {
        this.getListCatetory(res.payload.data.data)
        let dataTotal = res.payload.data.data
        this.setState({
          pagination: {
            current: parseInt(page) || 1,
            total: dataTotal,
            pageSize: parseInt(limit) || 10,
          },
        })
      }
    })
  }
  getListCatetory = (data) => {
    let lengthData = data.length
    for (let i = 0; i < lengthData; i++) {
      let lengthChildren = data[i].children.length
      data[i].key = data[i].id
      if (lengthChildren === 0) {
        data[i].children = null
      } else {
        let children = data[i].children
        this.getListCatetory(children)
      }
    }
    this.setState({
      dataSource: data,
    })
  }

  showConfirm = (id) => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk: () => {
        this.props.actions.categoryDelete(id).then((res) => {
          if (res.payload.status === 200) {
            const search = qs.parse(this.props.location.search.substr(1))
            this.callApiCategory(search.page, search.limit).then((res) => {
              message.success('Xóa tin tức thành công')
            })
          }
        })
      },
      onCancel() {},
    })
  }

  handleChangeCategory = (pagination) => {
    const location = {
      pathname: '/admin/category',
      search: `page=${pagination.current}&limit=${pagination.pageSize}`,
    }
    this.props.history.push(location)
  }

  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Danh mục',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-success" to={`/admin/category/created/${record.id}`}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
            <Link className="btn btn-info" to="/admin/category/1/edit">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
            <button type="button" className="btn btn-danger" onClick={() => this.showConfirm(record.id)}>
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
                  30 <span>Danh mục</span>
                </Link>
              </div>
              <form className="item form-inline">
                <label className="title" htmlFor="parts-type">
                  Name:
                </label>
                <input type="text" className="form-control" name="name" placeholder="name" />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search mr-2" aria-hidden="true"></i>
                  <span className="title-search">Search</span>
                </button>
              </form>
            </div>
            <div className="nav-item add-master">
              <Link className="btn btn-warm" to="/admin/category/created">
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                <span className="title-add">Add</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="table">
          <Table
            columns={columns}
            pagination={this.state.pagination}
            dataSource={this.state.dataSource}
            onChange={this.handleChangeCategory}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(CategoryAdminPage)
