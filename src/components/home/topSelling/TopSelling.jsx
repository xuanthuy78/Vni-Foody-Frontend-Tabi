import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import './TopSelling.scss'
import { CardProducts } from '../index'

export class TopSelling extends Component {
  constructor() {
    super()
    this.state = {
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    }
  }
  render() {
    return (
      <section className="top-selling">
        <div className="container">
          <div className="title">SẢN PHẨM NỔI BẬT</div>
          <OwlCarousel
            items={5}
            className="owl-theme"
            loop
            nav
            margin={8}
            autoplay
            navText={[
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ]}
            responsive={this.state.responsive}
          >
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
            <CardProducts></CardProducts>
          </OwlCarousel>
        </div>
      </section>
    )
  }
}

export default TopSelling
