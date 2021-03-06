import React from 'react';
import {Link} from 'react-router';
// import Tabs from '../containers/tabs';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile/dist/antd-mobile';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  const T = props.context.T;
  return (
    <div style={{ paddingTop: '1rem' }}>
      {
        props.posts.status === 'ready' ?
          props.posts.data.length > 0 ?
            props.posts.data.map((post, index) =>
              <Link key={post._id} to={`/post/${post._id}`}>
                <Card>
                  <Card.Header
                    thumb={post.coverUrl}
                    thumbStyle={{width: '100%'}}
                  />
                  <Card.Body>
                    <span>
                      <b>{post.title}</b>
                    </span>
                  </Card.Body>
                  <Card.Footer content={post.category} extra={<span>{moment(post.createdAt).format('YYYY.MM.DD')}</span>} />
                </Card>
                <WhiteSpace />
              </Link>
            ) :
            <div>抱歉，目前还没有文章！</div> :
          <Loading />
      }
    </div>
  );
};
