import React from 'react';
import { connect } from 'react-redux';
import zoo from './zoo';

export default (mapState, mapDispatch) => {
  // const { getState, dispatch } = store;
  // const allState = getState();

  return Component => {
    const { getState, dispatch } = zoo.store;

    const myDispatch = ({ type, payload }) => {
      const [typeId, typeName] = type.split('/');
      const { effects } = zoo;

      if (effects[typeId] && effects[typeId][typeName]) {
        return effects[typeId][typeName](payload);
      }
    };

    const NewComponent = props => {
      return <Component {...props} test={123213} dispatch={myDispatch} />;
    };

    return connect(mapState, mapDispatch)(NewComponent);
  };
};
