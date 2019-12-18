import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import zoo from './zoo/zoo';

import todoModel from './example/Todo/model';
import zooModel from './example/Zoo/model';

import Test from './example/index';

console.log(zoo);

zoo.model(todoModel);
zoo.model(zooModel);

const store = createStore(rootReducer);
const zooStore = zoo.createStore();

render(
  <Provider store={zooStore}>
    <Test />
  </Provider>,
  document.getElementById('root')
);
