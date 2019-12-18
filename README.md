# zoo redux test

nuomi / dva 类似封装 redux

path: /src/zoo

- api 和写法类似 dva
- 添加类似 mobx 的 effects 注入

```js
const onAdd = () => {
  dispatch({
    type: 'zoo/addAnimal',
    payload: value
  });

  // effects 注入写法
  zooEffects.addAnimal(value);
};
```

- nuomi 实现类似，区别在于
  - 每个模块新建一个

# start

```shell
yarn install
yarn start
```
