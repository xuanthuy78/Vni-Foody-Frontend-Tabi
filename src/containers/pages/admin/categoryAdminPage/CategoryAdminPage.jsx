import React, { Component } from 'react'
import { Table, Space, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const data = [
  {
    key: 1,
    id: 1,
    name: 'Thực đơn chính',
    children: [
      {
        key: 11,
        id: 2,
        name: 'John Brown',
      },
      {
        key: 12,
        id: 3,
        name: 'John Brown jr.',
        children: [
          {
            key: 121,
            id: 4,
            name: 'Jimmy Brown',
          },
        ],
      },
      {
        key: 13,
        id: 6,
        name: 'Jim Green sr.',
        children: [
          {
            key: 131,
            id: 7,
            name: 'Jim Green',
            children: [
              {
                key: 1311,
                id: 8,
                name: 'Jim Green jr.',
              },
              {
                key: 1312,
                id: 9,
                name: 'Jimmy Green sr.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    id: 10,
  },
]

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
    setTimeout(() => {
      this.buildColumsFromDatasource(data)
    }, 1000)
  }
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-success" to="/admin/category/created">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
            <Link className="btn btn-info" to="/admin/category/1/edit">
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
                  30 <span>Danh mục</span>
                </Link>
              </div>
              <form className="item form-inline">
                <label className="title" htmlFor="parts-type">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="name"
                />
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
          <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
    )
  }
}

export default CategoryAdminPage
