import React, { Component } from 'react'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

export class NotFoundPage extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" type="primary">
            Back Home
          </Link>
        }
      />
    )
  }
}

export default NotFoundPage
