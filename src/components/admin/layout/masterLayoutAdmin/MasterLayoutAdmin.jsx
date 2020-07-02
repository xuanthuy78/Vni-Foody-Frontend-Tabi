import React, { Component } from 'react'
import HeaderAdmin from '../headerAdmin/HeaderAdmin'
import SidebarAdmin from '../sidebarAdmin/SidebarAdmin'
import './MasterLayoutAdmin.scss'

export class MasterLayoutAdmin extends Component {
  constructor() {
    super()
    const showSidebar = localStorage.getItem('show')
    this.state = {
      showSidebar: showSidebar === 'false' ? false : true,
    }
  }
  handleShowSidebar = () => {
    const showSidebar = !this.state.showSidebar
    this.setState({ showSidebar })
    localStorage.setItem('show', showSidebar)
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {})
    )
    console.log(this.state.showSidebar)
    return (
      <div className="admin-container">
        <HeaderAdmin showSidebar={this.handleShowSidebar} />
        <SidebarAdmin showSidebar={this.state.showSidebar} />
        <main
          className={this.state.showSidebar ? 'left-content' : 'main-content'}
        >
          {childrenWithProps}
        </main>
      </div>
    )
  }
}

export default MasterLayoutAdmin
