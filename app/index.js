import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configure_store';
import GreetingContainer from './containers/greeting_container';

const store = configureStore();

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render((
  <Provider store={store}>
    <GreetingContainer />
  </Provider>
), root);
