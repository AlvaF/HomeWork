<template>
  <div class="PaymentList">
    <div class="PaymentItem" v-for="(item, idx) in items" :key="idx">
      <span v-for="(el, index) in item" :key="index"> {{ el }} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.PaymentList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-left: 500px;
  margin-bottom: 200px;
}
.PaymentItem {
  /* align-items: flex-start; */
  width: 100%;
  /* margin-left: 300px; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
}
span {
  padding-right: 10px;
}
</style>