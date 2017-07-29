import React, {Component} from 'react';
import {LocaleProvider, Layout, Menu, Icon } from 'antd';
import enUs from 'antd/lib/locale-provider/en_us';

import UserProfile from '../containers/UserProfile';
import WrappedIframe from '../component/example/WrappedIframe';
import '../common/antd.less';
import '../style/common.less';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <LocaleProvider locale={enUs}>
        <Layout className="index-layout">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <div className="collapsed">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <UserProfile/>
            </Header>
            <Content className="content" style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <WrappedIframe url="http://naotu.baidu.com/file/b8cc05ee0860a70a27be929f2fe9aaa7"/>
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default App;