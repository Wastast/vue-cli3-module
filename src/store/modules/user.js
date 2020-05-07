import { setToken } from '@/utils/auth.js';
import { login } from '@/api/login';
const state = {
  token: ''
};

const mutations = {
  // 设置token
  SET_TOKEN(context, data) {
    context.token = data;
  }
};

const actions = {
  // 设置token
  async setKey(context, data) {
    await context.commit('SET_TOKEN', data);
  },
  // 用户登录
  async userLogin(context, data) {
    let { username, password, isNoLogin = false } = data;
    if (isNoLogin) {
      setToken(1);
      return true;
    }
    let user = await login({ username, password });
    if (user.code !== 200) {
      return false;
    }
    setToken(user.access_token);
    return true;
  }
};

export default {
  state,
  mutations,
  actions
};
