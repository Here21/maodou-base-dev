import React from 'react';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default (props) => {
  return (
    <div className="container" style={{ paddingTop: '40px'}}>
      <div className="row">
        <div className="col-lg-12">
          {
            props.post ?
              <div className="hpanel blog-article-box">
                <div className="panel-heading">
                  <h1 style={{margin:'1rem 0'}}>[{props.post.category}] <br/> {props.post.title}</h1>
                  <div className="text-muted small">
                    作者：<span className="font-bold">{props.post.author}</span>&nbsp;
                    日期：{moment(props.post.createdAt).format('YYYY-MM-DD')}
                  </div>
                </div>
                <div className="panel-body" dangerouslySetInnerHTML={{ __html: props.post.content }} />
                {/*<div className="panel-footer">*/}
                {/*<span className="pull-right">*/}
                    {/*<i className="fa fa-comments-o" /> 22 comments*/}
                {/*</span>*/}
                  {/*<i className="fa fa-eye" /> 142 views*/}
                {/*</div>*/}
              </div> :
              <Loading />
          }
        </div>
      </div>
    </div>
  );
}
