export default {
  namespace: 'todo',
  state: {
    list: [{ title: 'bug', status: 0 }],
    listStatus: 'all',
    loading: false
  },
  effects: {
    setState(payload) {
      const state = this.getState();
      this.dispatch({ type: 'setState', payload });
    },
    finishTodo(index) {
      const { list } = this.getState().todo;
      // async request

      this.setState({ loading: true });

      setTimeout(() => {
        const newList = [...list];
        newList[index].status = 1;

        this.setState({ list: newList, loading: false });
      }, 1000);
    }
  },
  reducer: {
    setState: (payload, state) => ({ ...state, ...payload })
  }
};
