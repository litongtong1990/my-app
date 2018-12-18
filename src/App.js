
import React, { Component } from "react";
import "./App.css";
import {Layout, Breadcrumb} from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { LeFlowSider } from './components/LeFlowSider/index'
import { LeFlowHeader } from './components/LeFlowHeader/index'
import { LeFlowFooter } from './components/LeFlowFooter/index'

import { Content1 } from './pages/Content1/index'
import { Content2 } from './pages/Content2/index'


const { Content } = Layout;

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <LeFlowSider></LeFlowSider>
          <Layout>
            <LeFlowHeader/>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <Switch>
                <Route path="/pages/content1" component={Content1} />
                <Route path="/pages/content2" component={Content2} />
              </Switch>
            </Content>
            <LeFlowFooter/>
          </Layout>
        </Layout>
      </BrowserRouter>

    );
  }
}