import React, { Component } from "react";
import {
  Layout, Menu, Icon,
} from 'antd';
import { Link } from 'react-router-dom'
import './index.css'

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

export class LeFlowSider extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>流水线</span><Link to='/pages/pipeline'></Link >
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>页面2</span><Link to='/pages/content2'></Link >
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4"><Link to='/pages/content1'>Bill</Link ></Menu.Item>
              <Menu.Item key="5"><Link to='/pages/content2'>Alex</Link ></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
    );
  }
}