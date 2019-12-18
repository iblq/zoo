import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

import zoo from './zoo';

import todoModel from './zooExample/Todo/model';
import zooModel from './zooExample/Zoo/model';

import ZooExample from './zooExample/index';

zoo.model(todoModel);
zoo.model(zooModel);

const store = createStore(rootReducer);
const zooStore = zoo.createStore();

render(
  <Provider store={zooStore}>
    <ZooExample />
  </Provider>,
  document.getElementById('root')
);
