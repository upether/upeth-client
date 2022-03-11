import React from 'react';
import { Block } from './PageTemplate.styles';

import Header from './Header';

function PageTemplate({ children }) {
  return (
    <Block>
      <Header />
      <div className="main">{children}</div>
    </Block>
  );
}

export default PageTemplate;
