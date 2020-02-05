<template>
  <countTo
    :startVal="startVal"
    :endVal="endVal"
    :duration="duration"
    :separator="split"
    :suffix="suffix"
  ></countTo>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  props: {
    startVal: {
      // 起始值
      type: Number,
      default: 0
    },
    endVal: {
      // 终止值
      type: Number,
      default: 0
    },
    duration: {
      // 动画效果时间
      type: Number,
      default: 3000
    },
    split: {
      // 千位分隔符
      type: String,
      default: ''
    },
    suffix: {
      // 数字后缀
      type: String,
      default: ''
    }
  },
  components: {
    countTo
  }
};
</script>
