import React, { Component } from 'react'
import './NewsItem.scss'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    return (
      <div className="news-item">
        <div className="item-img">
          <Link to="/news-detail">
            <img
              src={'assets/images/supreme_pizza_large.jpg'}
              alt="Smiley face"
            />
          </Link>
        </div>
        <div className="item-content">
          <h6 className="title">
            Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của
          </h6>
          <p className="date">17/02/2019</p>
          <p className="content">
            Tặng 1 bánh pizza miễn phí cho ngày sinh nhật của bạnTặng 1 pizza cỡ
            Images are not technically inserted into an HTML page, images are
            linked to HTML pages. The tag creates a holding space for the
            referenced image. Images are not technically inserted into an HTML
            page, images are linked to HTML pages. The tag creates a holding
            space for the referenced image.
          </p>
        </div>
      </div>
    )
  }
}

export default NewsItem
