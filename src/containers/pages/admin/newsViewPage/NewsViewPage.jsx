import React, { Component } from 'react'
import { Form, Button, Spin } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'

export class NewsViewPage extends Component {
  state = {
    loading: true,
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      await this.props.actions.newsView(this.props.match.params.id)
      this.setState({
        loading: false,
      })
    }
  }
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    const { item } = this.props
    return (
      <Spin spinning={this.state.loading}>
        <div className="product-view">
          <h2>View News</h2>
          <Form layout="vertical">
            <Form.Item label="Tiêu đề">{item.title}</Form.Item>
            <Form.Item label="Danh Mục">{item.article_category_name} </Form.Item>
            <Form.Item label="Mô tả sản phẩm">{item.description}</Form.Item>
            <Form.Item label="Ảnh">
              <div className="block">
                <div className="box">
                  <div className="item">
                    <img className="" src={item.image} alt="" />
                  </div>
                </div>
              </div>
            </Form.Item>
            <Form.Item label="Chi tiết sản phẩm">
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.goBack}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    )
  }
}
const mapStateToProps = (state) => ({
  item: state.news.item,
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsViewPage)
