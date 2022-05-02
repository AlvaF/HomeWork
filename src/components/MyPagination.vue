<template>
  <div :class="[$style.container]">
    <div :class="[$style.pagination]">
      <div @click="OnClick(current - 1)">-</div>
      <div
        v-for="i in amount"
        :key="i"
        :class="{ [$style.active]: current === i }"
        @click="OnClick(i)"
      >
        {{ i }}
      </div>
      <div @click="OnClick(current + 1)">+</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    length: Number,
    n: Number,
    current: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    OnClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("changePage", p);
    },
  },
};
</script>
<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
}
.pagination {
  display: flex;
  & > div {
    padding: 10px;
    &.active {
      background-color: #ccc;
    }
  }
}
</style>
