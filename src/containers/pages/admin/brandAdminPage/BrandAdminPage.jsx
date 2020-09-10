import React, { Component } from 'react'
import { Table, Modal, Space } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const data = [
  {
    key: '1',
    id: '1323469',
    name: 'KFC',
    image: 'anh.jpg',
    order: '1',
  },
]

const { confirm } = Modal
export class BrandAdminPage extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: null,
      columns: null,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.buildColumsFromDatasource(data)
    }, 1000)
  }
  // modal delete
  showConfirm = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content:
        'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {},
    })
  }

  buildColumsFromDatasource(dataSource) {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Tên thương hiệu',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (text) => (
          <div className="item">
            <img
              className=""
              src={'http://localhost:3000/assets/images/left_1.png'}
              alt=""
            />
          </div>
        ),
      },
      {
        title: 'Thứ tự sắp xếp',
        dataIndex: 'order',
        key: '1',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-info" to="/admin/brand/1/edit">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.showConfirm}
            >
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </Space>
        ),
      },
    ]
    this.setState({ dataSource, columns })
  }
  render() {
    const { dataSource, columns } = this.state
    return (
      <div className="main-detail">
        <div className="filter mb-3">
          <div className="nav-filter">
            <div className="nav-item search">
              <div className="item result">
                <Link to="#" className="navbar-brand">
                  30 <span>Thương hiệu</span>
                </Link>
              </div>
            </div>
            <div className="nav-item add-master">
              <Link className="btn btn-warm" to="/admin/brand/created">
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                <span className="title-add">Add</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="table">
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
    )
  }
}

export default BrandAdminPage
