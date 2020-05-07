import { Message } from 'element-ui';

// 获取数据的类型
export const getDataType = obj => {
  let type;
  if (obj === null) {
    return String(obj);
  }
  if (typeof obj === 'object') {
    type = Object.prototype.toString
      .call(obj)
      .replace('[object ', '')
      .replace(']', '')
      .toLowerCase();
  } else {
    type = typeof obj;
  }
  return type;
};

// 提示框
export const TipsPop = ({ message, type = 'success' }) => {
  Message({
    message: message,
    type: type,
    duration: 1000
  });
};

// 判断环境
export const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

// 日期时间补0
export const supZero = value => {
  return Number(value) < 10 ? '0' + value : value;
};
