import React, { Component } from 'react'
import { Header, Footer } from '../index'
import { BackTop } from 'antd'
export class MasterLayout extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    )
    return (
      <div>
        <Header></Header>
        <main className="">{childrenWithProps}</main>
        <Footer></Footer>
        <div className="back-to-top" onClick={this.scrollToTop}>
          <BackTop>
            <button className="btn-top" id="myBtn" title="Go to top">
              <i className="fa fa-angle-up"></i>
            </button>
          </BackTop>
        </div>
      </div>
    )
  }
}

export default MasterLayout
