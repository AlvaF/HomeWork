<template>
  <div id="app">
    <header>
      <h3>My personal costs</h3>
    </header>
    <main>
      <button @click="clicked()">ADD NEW COST+</button>

      <AddPaymentForm @addNewPayment="addPayment()" v-show="toggle" />
      <PaymentsDisplay :items="paymentsList" />
    </main>
  </div>
</template>
<script>
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      toggle: false,
    };
  },

  methods: {
    addPayment(data) {
      this.paymentsList.push(data);
      // this.paymentsList = [...this.paymentsList, data];
      console.log(data);
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          type: "Food",
          amount: 169,
        },
        {
          date: "24.03.2020",
          type: "Transport",
          amount: 360,
        },
        {
          date: "24.03.2020",
          type: "Food",
          amount: 532,
        },
      ];
    },
    created() {
      this.paymentsList = this.fetchData();
    },
    clicked() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
title {
  font-size: 12px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
input {
  margin-top: 5px;
  opacity: 50%;
}
button {
  background-color: rgb(12, 136, 145);
  color: white;
  border: none;
}
</style>
