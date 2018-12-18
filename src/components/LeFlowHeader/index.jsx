import React, { Component } from "react";
import { Layout } from 'antd';

const { Header } = Layout;

export class LeFlowHeader extends Component {
  render() {
    return (
        <Header style={{ background: '#fff', padding: 0 }} />
    );
  }
}