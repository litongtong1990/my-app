
import React, { Component } from "react";
import "./App.css";
import {Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { LeFlowSider } from './components/LeFlowSider/index'
import { LeFlowHeader } from './components/LeFlowHeader/index'
import { LeFlowFooter } from './components/LeFlowFooter/index'



import { Content1 } from './pages/Content1/index'
import { Content2 } from './pages/Content2/index'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <LeFlowSider></LeFlowSider>
          <Layout>
            <LeFlowHeader/>
              <Switch>
                <Route path="/pages/pipeline" component={Content1} />
                <Route path="/pages/content2" component={Content2} />
              </Switch>
            <LeFlowFooter/>
          </Layout>
        </Layout>
      </BrowserRouter>

    );
  }
}