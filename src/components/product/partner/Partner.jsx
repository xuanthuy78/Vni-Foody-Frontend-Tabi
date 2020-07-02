import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import './Partner.scss'

export class Partner extends Component {
  constructor() {
    super()
    this.state = {
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1000: {
          items: 5,
        },
      },
    }
  }
  render() {
    return (
      <div className="product-bottom">
        <h5>ĐỐI TÁC</h5>
        <div className="news-food">
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
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Gongcha.png'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Baskinrobbins.jpeg'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Highlands.png'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Jollibee.jpeg'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/KFC.png'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Lotteria.jpeg'}
                alt=""
              />
            </div>
            <div className="card-company">
              <img
                className="card-img-top"
                src={'assets/images/company/Pizza.jpeg'}
                alt=""
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

export default Partner
