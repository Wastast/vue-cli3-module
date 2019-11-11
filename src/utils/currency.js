// 全局通用函数
export const getType = obj => {
  if (obj === null) return String(obj)
  let type
  if (typeof obj === 'object') {
    type = Object.prototype.toString
      .call(obj)
      .replace('[object ', '')
      .replace(']', '')
      .toLowerCase()
  } else {
    type = typeof obj
  }
  return type
}
