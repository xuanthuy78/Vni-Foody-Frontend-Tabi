import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../../../actions/index'

function CategoryAddAdminPage(props) {
  const [required, setRequired] = useState(false)
  const [notice, setNotice] = useState(null)

  const onFinish = (values) => {
    props.actions.categoryCreate(values).then((res) => {
      if (res && res.payload && res.payload.data && res.payload.data.status === 'success') {
        props.history.go(-1)
        message.success('Thêm thành công')
      } else {
        setRequired(res.payload.data.error)
        setNotice(res.payload.data.message.name[0])
      }
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <h3>Category</h3>
      <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Tên danh mục:" name="name" validateStatus={required === true ? 'error' : ''} help={notice}>
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
