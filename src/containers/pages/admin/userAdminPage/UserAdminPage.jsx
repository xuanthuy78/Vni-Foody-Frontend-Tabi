import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Table, Modal, Space } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const data = [
  {
    key: '1',
    id: '1323469',
    name: 'Admin',
    email: 'admin@gmail.com',
    gender: '1',
    address: 'Trưng Nữ Vương',
    phone: '077.445.4336',
    role: '0',
  },
]

const { confirm } = Modal
export class UserAdminPage extends Component {
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
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-info" to="/admin/user/1/edit">
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
      <MasterLayoutAdmin>
        <div className="main-detail">
          <div className="filter mb-3">
            <div className="nav-filter">
              <div className="nav-item search">
                <div className="item result">
                  <Link to="#" className="navbar-brand">
                    30 <span>Slider</span>
                  </Link>
                </div>
              </div>
              <div className="nav-item add-master">
                <Link className="btn btn-warm" to="/admin/user/created">
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
      </MasterLayoutAdmin>
    )
  }
}

export default UserAdminPage
