import React, { Component } from "react";
import {Layout, Breadcrumb} from 'antd';
import './index.css'

const { Content } = Layout

export class Content2 extends Component {
  render() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>LeFlow</Breadcrumb.Item>
          <Breadcrumb.Item>页面2</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          This is a test page.
        </div>
      </Content>
    );
  }
}