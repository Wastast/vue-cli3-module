import Vue from 'vue';
// 过滤数据
const modulesFiles = require.context('./modules', true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

Object.keys(modules).forEach(item => {
  let arr = modules[item];
  Object.keys(arr).forEach(items => {
    Vue.filter(items, arr[items]);
  });
});
