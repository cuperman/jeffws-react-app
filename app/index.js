import React from 'react';
import ReactDom from 'react-dom';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render((
  <h1>Hello World</h1>
), root);
