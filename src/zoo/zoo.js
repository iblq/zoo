import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

const addNamespace = (obj, name) => {
  const newObj = {};
  Object.keys(obj).forEach(item => {
    newObj[`${name}/${item}`] = obj[item];
  });
  return newObj;
};

class Zoo {
  constructor() {
    this.state = {};
    this.models = {};
    this.reducers = {};
    this.effects = {};
    this.store = {};
    this.allReducers = {};
  }

  model(modelObj) {
    const { state, reducer, effects, namespace } = modelObj;
    this.state[namespace] = state;
    this.models[namespace] = modelObj;

    const newReducer = addNamespace(reducer, namespace);
    this.reducers[namespace] = newReducer;
    this.allReducers = { ...this.allReducers, ...newReducer };

    // const newEffects = addNamespace(effects, namespace);
    this.effects[namespace] = effects;
  }

  createStore() {
    const reducers = {};
    Object.keys(this.reducers).forEach(namespace => {
      const reducerObj = this.reducers[namespace];
      const stateObj = this.state[namespace];

      this.reducers[namespace] = (state = stateObj, action = {}) => {
        const { type, payload } = action;
        // const newType = `${namespace}/${type}`;

        console.log(action);

        if (reducerObj[type]) {
          return reducerObj[type](payload, stateObj);
        }

        console.log('unknow action type:' + type);

        return stateObj;
      };
    });

    this.store = createStore(combineReducers(this.reducers));

    const { dispatch, getState } = this.store;

    Object.keys(this.effects).forEach(namespace => {
      this.effects[namespace].dispatch = ({ type, payload }) =>
        dispatch({ type: `${namespace}/${type}`, payload });
      this.effects[namespace].getState = getState;
    });

    return this.store;
  }
}

export default new Zoo();
