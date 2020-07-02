import React, { Component } from 'react'
import './TopNews.scss'
import News from '../news/News'

export class TopNews extends Component {
  render() {
    return (
      <div className="sidebar-news">
        <h3 className="title">
          BÀI VIẾT NỔI BẬT
          <i className="fa fa-bars float-right" aria-hidden="true" />
        </h3>
        <News />
        <News />
        <News />
      </div>
    )
  }
}

export default TopNews
