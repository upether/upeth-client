import React from 'react';
import { Block } from './SubPageTemplate.styles';

import Header from './Header';
import Footer from './Footer';

function SubPageTemplate({ children }) {
  return (
    <Block>
      <Header />
      <div className="subMain">{children}</div>
      <Footer />
    </Block>
  );
}

export default SubPageTemplate;
