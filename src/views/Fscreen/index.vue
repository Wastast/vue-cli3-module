<template>
  <div class="index">
    <ul class="ul">
      <li
        class="li"
        v-for="(item, index) in list"
        :key="index"
        :style="{ background: `rgba(191,178,87,${(index + 1) / list.length})` }"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.index {
  .ul {
    width: 50vw;
    height: 200px;
    background: #000;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    .li {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
