import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

export class Banner extends Component {
  render() {
    return (
      <section className="banner-container">
        <div className="container">
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={'assets/images/slide_1.jpg'} alt="Los Angeles" />
              </div>
              <div className="carousel-item">
                <img src={'assets/images/slide_2.jpg'} alt="Chicago" />
              </div>
            </div>
            {/* Left and right controls */}
            <Link
              className="carousel-control-prev"
              to={{ pathname: '#demo' }}
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </Link>
            <Link
              className="carousel-control-next"
              to={{ pathname: '#demo' }}
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </Link>
          </div>
          <div className="carousel-image">
            <img src={'assets/images/banner_top.jpg'} alt="" className="" />
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
