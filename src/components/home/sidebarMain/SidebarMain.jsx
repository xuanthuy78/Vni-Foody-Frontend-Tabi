import React, { Component } from 'react'
import { Sidebar } from '../../layout/index'
import { TopNews } from '../index'
import './SidebarMain.scss'

export class SidebarMain extends Component {
  render() {
    return (
      <div className="main-sidebar">
        <Sidebar />
        <div className="sidebar-advertisement">
          <img src={'assets/images/left_1.png'} alt="" />
          <img src={'assets/images/left_2.png'} alt="" />
        </div>
        <TopNews />
      </div>
    )
  }
}

export default SidebarMain
