import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss';
import '@/styles/reset.css';
import './permission';
import '@/filter';
import '@/directives';
import '@/utils/variables';
import echarts from 'echarts';

import { Form, FormItem, Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
let element = {
  Form: Form,
  FormItem: FormItem,
  Input: Input
};

Object.entries(element).forEach(([name, el]) => {
  Vue.use(el);
});

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
