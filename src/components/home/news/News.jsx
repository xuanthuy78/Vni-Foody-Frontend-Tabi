import React, { Component } from 'react'
import './News.scss'
import { Link } from 'react-router-dom'

export class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-img">
          <img
            src={'assets/images/pizza_lap_xuong_large.jpg'}
            alt=""
            className=""
          />
        </div>
        <div className="news-title">
          <Link to="/news-detail" className="link-title">
            Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn
          </Link>
        </div>
        <div className="news-content">
          Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạn Tặng 1 bánh
          pizza miễn phí cho ngày sinh nhật của bạn
        </div>
      </div>
    )
  }
}

export default News
