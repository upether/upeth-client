import React from 'react';
import { Block } from './PageTemplate.styles';

import Header from './Header';
import Footer from './Footer';

function PageTemplate({ children }) {
  return (
    <Block>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </Block>
  );
}

export default PageTemplate;
