<template>
  <div class="form">
    <select v-model="category" v-if="categoryList">
      <option v-for="(value, index) in categoryList" :key="index">
        {{ value }}
      </option>
    </select>
    <br />
    <input v-model.number="value" placeholder="Payment value" /><br />
    <input v-model="date" placeholder="Payment date" /><br />
    <button @click="OnClickSave()">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.0${month}.${year}`;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    OnClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$store.commit("addDataToPaymentList", data);
      // this.$emit("addNewPayment", data);
      console.log(data);
    },
  },
  created() {
    this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    const { category, section } = this.$route.params;
    if (!category || !section) {
      return;
    }
    this.category = category;
    const { value } = this.$route.query;
    if (!value) return;
    this.value = value;
    if (this.value && this.category) {
      this.OnClickSave();
    }
  },
};
</script>
<style lang="scss">
</style>