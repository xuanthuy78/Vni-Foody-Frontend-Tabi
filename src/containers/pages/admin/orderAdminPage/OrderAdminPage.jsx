import React, { Component } from 'react'
import MasterLayoutAdmin from '../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin'
import { Table, Space, Modal } from 'antd'
import { Link } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const data = [
  {
    key: '1',
    id: '1323469',
    name: 'John Brown',
    phone: '0774453346',
    address: 'Trưng nữ vương',
    dateOrder: '06/07/2020',
    status: '1',
  },
]
const { confirm } = Modal
export class OrderAdminPage extends Component {
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
        title: 'Mã đơn hàng',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Tên người mua',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Điện thoại',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Ngày đặt hàng',
        dataIndex: 'dateOrder',
        key: 'dateOrder',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          return status === '1' ? (
            <button type="button" className="btn btn-light">
              Đang xử lý
            </button>
          ) : status === '2' ? (
            <button type="button" className="btn btn-success">
              Đã xử lý
            </button>
          ) : (
            <button type="button" className="btn btn-danger">
              Hủy
            </button>
          )
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="" to="/admin/order/1/edit">
              Xem chi tiết
            </Link>
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
                    30 <span>Đơn hàng</span>
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
                <Link className="btn btn-warm" to="/admin/product/created">
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

export default OrderAdminPage
