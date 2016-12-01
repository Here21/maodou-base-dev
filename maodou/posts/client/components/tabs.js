import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="这是 title"
            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
            extra={<span>this is extra</span>}
          />
          <Card.Body>
            <div>这是卡片内容</div>
          </Card.Body>
          <Card.Footer content="这是卡尾" extra={<div>这是尾部介绍</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }
}
// export default class extends React.Component {
//
//   render() {
//     return (
//       <div className={`posts-tab ${this.props.position} ${this.props.color}`}>
//         <ul className="flex-container">
//           {
//             this.props.configs ?
//               this.props.configs.categories.map((cate, i) =>
//                 <li
//                   key={i}
//                   onClick={(e) => this.props.dispatch(this.props.changeCategory(e, cate))}
//                   className={`${cate===this.props.category ? 'active' : ''} flex-item`}
//                 >
//                   {cate}
//                 </li>
//               ) :
//               <div />
//           }
//         </ul>
//       </div>
//     );
//   }
// }
