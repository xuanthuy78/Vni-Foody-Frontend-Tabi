import React, { Component } from "react"
import MasterLayoutAdmin from "../../../../components/admin/layout/masterLayoutAdmin/MasterLayoutAdmin"
import { Table, Modal, Space } from "antd"
import { Link } from "react-router-dom"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as Actions from "../../../../actions"

const { confirm } = Modal

export class NewsAdminPage extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: null,
      columns: null,
      title: null,
    }
  }
  async componentDidMount() {
    await this.props.actions.getlistNews()
    const items = this.props.news.data
    items.map((item, index) => (item.key = index))
    setTimeout(() => {
      this.buildColumsFromDatasource(items)
    }, 1000)
  }
  // modal delete
  showConfirm = () => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        }).catch(() => console.log("Oops errors!"))
      },
      onCancel() {},
    })
  }

  buildColumsFromDatasource(dataSource) {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Tiêu đề",
        dataIndex: "title",
        key: "title",
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: "Danh mục",
        dataIndex: "article_category_id",
        key: "article_category_id",
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: "Mô tả",
        dataIndex: "description",
        key: "description",
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: "Hình ảnh",
        dataIndex: "image",
        key: "image",
        render: (text) => (
          <div className="item">
            <img
              className=""
              src={"http://localhost:3000/assets/images/left_1.png"}
              alt=""
            />
          </div>
        ),
      },
      {
        title: "Ngày tạo",
        dataIndex: "created_at",
        key: "created_at",
        render: (text) => <div className="describe">{text}</div>,
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle" className="icon-btn">
            <Link className="btn btn-info" to="/admin/news/1/edit">
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
    console.log(this.props.news)
    return (
      <MasterLayoutAdmin>
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
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Tìm theo tiêu đề..."
                  />
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
            <Table columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </MasterLayoutAdmin>
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
