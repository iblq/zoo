import React, { useState } from 'react';
import connect from '../../zoo/connect';

const TestTodo = props => {
  const { dispatch, list } = props;

  const [value, setValue] = useState('');

  const onAdd = () => {
    dispatch({
      type: 'todo/setState',
      payload: { list: [...(list || []), value] }
    });
  };

  const onAddAnimal = () => {
    dispatch({
      type: 'zoo/addAnimal',
      payload: value
    });
  };

  return (
    <div>
      <input onChange={e => setValue(e.target.value)} />
      <button onClick={onAdd}>add</button>
      <button onClick={onAddAnimal}>add animal</button>
      <br />
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item, i) => {
            return <li key={item + i}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(state => {
  console.log({ state });
  return {
    list: state.todo.list
  };
})(TestTodo);
