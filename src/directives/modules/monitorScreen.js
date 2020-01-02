// 监听全局指令 是否变为全屏
const monitorScreen = {
  inserted(el, binding, vnode) {
    let handler = e => {
      let height = window.innerHeight;
      if (height >= 1080) {
        el.style.cssText = 'width: 100vw;height: 100vh;';
      } else {
        el.style.cssText = '';
      }
    };
    el.handler = handler;
    window.addEventListener('resize', el.handler);
    let height = window.innerHeight;
    if (height >= 1080) {
      el.style.cssText = 'width: 100vw;height: 100vh;';
    } else {
      el.style.cssText = '';
    }
  },
  unbind(el, binding, vnode) {
    window.removeEventListener('resize', el.handler);
  }
};

export default { monitorScreen };
