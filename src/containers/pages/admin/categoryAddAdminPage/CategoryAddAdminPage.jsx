import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'

function CategoryAddAdminPage(props) {
  const onFinish = (values) => {
    props.actions.categoryCreate(values)
    props.history.go(-1)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <h3>Category</h3>
      <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Tên danh mục:"
          name="name"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập danh mục',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>Cancel</Button>
          <Button type="primary" htmlType="submit" className="ml-3">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(CategoryAddAdminPage)
