<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 0px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #00bcd4;
  box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: #00bcd4;
}
</style>
