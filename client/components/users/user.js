import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';
import { List, Button, Flex } from 'antd-mobile/dist/antd-mobile';

const Item = List.Item;

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Flex justify="around" direction="column" style={{height: '6rem', paddingTop: '1rem'}}>
          <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'rebeccapurple'}}></div>
          <p style={{fontSize: '.3rem'}}>生命不息，奋斗不止</p>
          <Flex justify="between" style={{ width: '3.3rem' }}>
            <Button inline onClick={() => {browserHistory.push('/login')}}>登录</Button>
            <Button type="primary" inline onClick={() => {browserHistory.push('/register')}}>注册</Button>
          </Flex>
        </Flex>
        <List>
          <Item arrow="horizontal" onClick={() => alert('会员中心')}>会员中心</Item>
          <Item arrow="horizontal" onClick={() => alert('个人资料')}>个人资料</Item>
          <Item arrow="horizontal" onClick={() => alert('我的收藏')}>我的收藏</Item>
          <Item arrow="horizontal" onClick={() => alert('我的小组')}>我的小组</Item>
          <Item arrow="horizontal" onClick={() => alert('我的消息')}>我的消息</Item>
        </List>
      </div>
    );
  }
};
