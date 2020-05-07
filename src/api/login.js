import { post } from './http';

// 用户登录
export const login = data => post('', data);
