import React, { Component } from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

export class LeFlowFooter extends Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
          Copyright ©1998-2018 Tencent. All Rights Reserved
        </Footer>    
    );
  }
}