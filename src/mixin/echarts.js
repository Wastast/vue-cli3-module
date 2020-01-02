import { EleResize } from '@/utils/esresize';
// echarts 混入
export const EchatsMixin = {
  data() {
    return {
      echartsTimer: null
    };
  },
  methods: {
    // 自适应echarts
    resizeEcharts() {
      let dom = this.$refs['echarts']; // 获取当前 Echarts DOm
      let myChart = this.$echarts.init(dom); // 初始化 DOM
      let resizeDiv = dom;
      let listener = () => {
        myChart.resize();
      };
      EleResize.on(resizeDiv, listener);
      return myChart; // 将初始化的 DOM 返回
    },
    // echarts 自动选择效果
    autoMatic(myChart, length, time = 1000) {
      if (this.echartsTimer) {
        clearInterval(this.echartsTimer);
      }
      let index = 0;
      this.echartsTimer = setInterval(() => {
        var dataLen = length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: index
        });
        index = (index + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index
        });
      }, time);
    }
  },
  beforeDestroy() {
    if (this.echartsTimer) {
      clearInterval(this.echartsTimer);
    }
  }
};
