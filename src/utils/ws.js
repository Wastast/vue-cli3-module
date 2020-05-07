// 复用webscoket
export const ws = ({ url = '', openCb, mesCb, closeCb }) => {
  let webScroket = new WebSocket(url);
  // 添加连接成功默认回调
  if (!openCb) {
    openCb = () => {
      console.log(`open-----------${url}`);
    };
  }

  // 添加消息发送默认回调
  if (!mesCb) {
    mesCb = () => {
      console.log(`mes------- ${url}`);
    };
  }

  // 添加默认关闭回调
  if (!closeCb) {
    closeCb = () => {
      console.log(`close ---- ${url}`);
    };
  }
  // 连接成功时调用
  webScroket.onopen = openCb;

  // 收到消失时调用
  webScroket.onmessage = mesCb;

  // 连接关闭时调用
  webScroket.closeCb = closeCb;
  return webScroket;
};
