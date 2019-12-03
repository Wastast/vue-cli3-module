<template>
  <div class="scroll" @mouseenter="handleMove">
    <vuescroll ref="vs" :ops="option" @handle-scroll="handleScroll">
      <slot name="scroll-content"></slot>
    </vuescroll>
  </div>
</template>

<script>
import vuescroll from 'vuescroll';
export default {
  name: 'scroll',
  props: {
    option: {
      validator: function(value) {
        let objArr = ['vuescroll', 'scrollPanel', 'rail', 'bar'];
        Object.keys(value).forEach(item => {
          let isTrue = objArr.includes(item);
          if (!isTrue) {
            throw new Error('该对象属性名称不符合,请仔细查看, vuescroll,scrollPanel,rail,bar');
          }
        });
        return true;
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 正常滚动的触发函数
    handleScroll(vertical, horizontal, nativeEvent) {
      let process = vertical.process;
      if (process === 0) {
        this.$emit('handleTop');
      }
      if (process === 1) {
        this.$emit('handleBottom');
      }
    },
    // 移入内容触发
    handleMove() {
      this.$emit('handleMove');
    }
  },
  mounted() {},
  components: {
    vuescroll
  }
};
</script>

<style scoped>
.scroll >>> .__panel {
  overflow: hidden scroll !important;
}
</style>

<style scoped lang="scss">
.scroll {
  height: 100%;
  width: 100%;
}
</style>
