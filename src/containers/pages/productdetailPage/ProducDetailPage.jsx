import React, { Component } from 'react'
import MasterLayout from '../../../components/layout/masterLayout/MasterLayout'
import './ProducDetailPage.scss'
import {
  HotProduct,
  ProductDetailSidebar,
  AboutInformationProduct,
  ScriptAboutProduct,
} from '../../../components/productdetail/index'
import ModalView from '../../../components/productdetail/modalView/ModalView'
import { Link } from 'react-router-dom'

export class ProducDetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModalView: false,
    }
  }
  handleShowModalView = () => {
    this.setState({
      showModalView: !this.state.showModalView,
    })
  }
  handleOk = (e) => {
    console.log(e)
    this.setState({
      showModalView: false,
    })
  }
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      showModalView: false,
    })
  }
  render() {
    return (
      <MasterLayout>
        <section className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="siderba ">
                  <ProductDetailSidebar></ProductDetailSidebar>
                </div>
                <div className="product-detail ">
                  <HotProduct></HotProduct>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ">
                <div className="productdetail-menu">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Trang Chủ
                      </Link>
                    </li>
                    <li className="nav-item icon-link">
                      <Link className="nav-link" to="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Thực đơn chính
                      </Link>
                    </li>
                    <li className="nav-item icon-link">
                      <Link className="nav-link" to="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link " to="#">
                        <strong> Supreme</strong>
                      </Link>
                    </li>
                  </ul>
                </div>
                <AboutInformationProduct
                  handleShowModalView={this.handleShowModalView}
                />
                <ModalView
                  displayModalView={this.state.showModalView}
                  funtionCantion={this.handleCancel}
                />
                <ScriptAboutProduct></ScriptAboutProduct>
              </div>
            </div>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

export default ProducDetailPage
