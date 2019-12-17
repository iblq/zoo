export default {
  namespace: 'todo',
  state: {
    list: []
  },
  effects: {
    setState(payload) {
      console.log('todo setState');
      const state = this.getState();
      this.dispatch({ type: 'setState', payload });
    }
  },
  reducer: {
    setState: (payload, state) => ({ ...state, ...payload })
  }
};
