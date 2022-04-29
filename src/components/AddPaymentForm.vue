<template>
  <div class="form">
    <input v-model="amount" placeholder="Payment amount" /> <br />
    <input v-model="type" placeholder="Payment type" /><br />
    <input v-model="date" placeholder="Payment date" /><br />
    <button @click="OnClickSave()">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      amount: "",
      type: "",
      date: "",
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
  },
  methods: {
    OnClickSave() {
      const data = {
        amount: this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
      console.log(data);
    },
  },
};
</script>
<style lang="scss">
button {
  background-color: rgb(12, 136, 145);
  color: white;
  border: none;
}
</style>