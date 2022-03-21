import React from 'react';
import { Block } from './ArticleTemplate.styles';

const ArticleTemplate = ({ children }) => {
  return <Block>{children}</Block>;
};

export default ArticleTemplate;
