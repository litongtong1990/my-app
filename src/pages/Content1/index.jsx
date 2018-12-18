import React, { Component } from "react";
import {Layout, Collapse, Breadcrumb, List } from 'antd';
import { PipeLine } from './../../components/PipeLine/index'
import './index.css'

const Panel = Collapse.Panel;
const { Content } = Layout

export class Content1 extends Component {
  state = {
    module1 : 
      [
        {
          name:'流水线名1',
          submitter:'提交人1',
          time:'提交时间',
          tag:'正式版本',
          steps:['构建','测试','部署']
        },
        {
          name:'流水线名2',
          submitter:'提交人2',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名3',
          submitter:'提交人3',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名4',
          submitter:'提交人4',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名5',
          submitter:'提交人5',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名6',
          submitter:'提交人6',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        }
      ],
      module2 : 
      [
        {
          name:'流水线名1',
          submitter:'提交人1',
          time:'提交时间',
          tag:'正式版本',
          steps:['构建','测试','部署']
        },
        {
          name:'流水线名2',
          submitter:'提交人2',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名3',
          submitter:'提交人3',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名4',
          submitter:'提交人4',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名5',
          submitter:'提交人5',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        },
        {
          name:'流水线名6',
          submitter:'提交人6',
          time:'提交时间',
          tag:'测试版本',
          steps:['构建','测试','部署','线上运营']
        }
      ]
  }

  render() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>LeFlow</Breadcrumb.Item>
          <Breadcrumb.Item>流水线</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <Collapse bordered={false}>
            <Panel header="模块1" key="1">
              <List
                split = {false}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={this.state.module1}
                renderItem={
                    item => (
                      <List.Item >
                        <PipeLine pipeline={item}></PipeLine>
                      </List.Item>
                )}
              />
            </Panel>
            <Panel header="模块2" key="2">
              <List
                split = {false}
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={this.state.module2}
                renderItem={
                    item => (
                      <List.Item >
                        <PipeLine pipeline={item}></PipeLine>
                      </List.Item>
                )}
              />
            </Panel>
          </Collapse>       
        </div> 
      </Content>
    );
  }
}