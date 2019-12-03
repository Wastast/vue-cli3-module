import { getDataType } from '@/utils/currency';

let globle = {
  req: process.env.VUE_APP_BASE_API,
  url: ''
};

// 过滤数据
Object.keys(globle).forEach(item => {
  let type = getDataType(globle[item]);

  if (type === 'object' || type === 'array') {
    window[item] = JSON.parse(JSON.stringify(globle[item]));
  } else {
    window[item] = globle[item];
  }
});
