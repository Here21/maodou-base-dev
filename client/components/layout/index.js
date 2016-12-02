import React from 'react';
import Nav from '../../containers/layout/nav';
import Footer from '../../containers/layout/footer';

export default (props) => (
  <div className="landing-page">
    <Nav />
    {props.children}
    <Footer />
  </div>
);
