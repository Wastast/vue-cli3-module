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
