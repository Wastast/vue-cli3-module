import Vue from 'vue';
// 过滤数据
const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((arr, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  arr[moduleName] = value.default;
  return arr;
}, {});

Object.keys(modules).forEach(item => {
  let arr = modules[item];

  Object.keys(arr).forEach(items => {
    Vue.filter(items, arr[items]);
  });
});
