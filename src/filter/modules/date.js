// 转换时间的过滤器
const fiterYMD = value => {
  let date = new Date(value);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let time = new Date(value).toTimeString().slice(0, 8);
  return `${year}-${month}-${day} ` + time;
};

export default {
  fiterYMD
};
